import { useEffect } from 'react'
import emailjs from '@emailjs/browser'

// Fill these in after setting up EmailJS (see README or SETUP instructions)
const EMAILJS_SERVICE_ID = 'service_23i0fzi'
const EMAILJS_TEMPLATE_ID = 'template_lccv0od'
const EMAILJS_PUBLIC_KEY = 'Vndi6aSmMSdcsTJzB'

export function useVisitorTracking() {
  useEffect(() => {
    if (sessionStorage.getItem('visitor_tracked')) return

    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        const nav = navigator as Navigator & { deviceMemory?: number; connection?: { effectiveType?: string } }
        const params = {
          // IP geolocation
          visitor_ip: data.ip ?? 'unknown',
          visitor_city: data.city ?? 'unknown',
          visitor_region: data.region ?? 'unknown',
          visitor_country: data.country_name ?? 'unknown',
          visitor_postal: data.postal ?? 'unknown',
          visitor_coords: data.latitude && data.longitude ? `${data.latitude}, ${data.longitude}` : 'unknown',
          visitor_timezone: data.timezone ?? 'unknown',
          visitor_org: data.org ?? 'unknown',
          visitor_asn: data.asn ?? 'unknown',
          visitor_currency: data.currency ?? 'unknown',
          visitor_calling_code: data.country_calling_code ?? 'unknown',
          // Visit context
          visit_time: new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' }),
          visit_page: window.location.href,
          referrer: document.referrer || 'direct / unknown',
          // Browser & device
          user_agent: navigator.userAgent,
          browser_language: navigator.language,
          screen_resolution: `${screen.width}x${screen.height}`,
          viewport_size: `${window.innerWidth}x${window.innerHeight}`,
          cpu_cores: navigator.hardwareConcurrency ?? 'unknown',
          device_memory: nav.deviceMemory ? `${nav.deviceMemory} GB` : 'unknown',
          network_type: nav.connection?.effectiveType ?? 'unknown',
          session_history_length: history.length,
        }
        return emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params, EMAILJS_PUBLIC_KEY)
      })
      .then(() => {
        sessionStorage.setItem('visitor_tracked', '1')
      })
      .catch(() => {
        // Silently fail — tracking should never break the site
      })
  }, [])
}

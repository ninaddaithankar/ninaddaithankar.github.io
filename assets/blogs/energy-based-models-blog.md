I've read about energy-based models multiple times across different courses and watched more tutorials than I'd like to admit. And every single time, I'd walk away feeling like "I got it!", only to realize a few weeks later that I'd forgotten or mixed it all up. Something about these models just wouldn't stick in isolation. So I decided to put them together into a connected narrative where each work solves a specific problem of the previous one, because that's literally what it is. Not standalone ideas, but a chain of fixes that make the previous method more powerful. 

(As you guessed, this is more of a blog I wrote for myself than others, so that in a few months when my biological neural net starts pruning the connections in my memory where this understanding is stored, I can quickly skim this and strengthen those networks back to retain the understanding hehe.) 



## Hopfield Networks

**Setup:** Imagine 10 neurons, all connected to each other. Each neuron is either on (+1) or off (-1). Each connection between two neurons has a weight `wᵢⱼ`, a number representing how strongly they're coupled. The energy of the entire network at any point is:

```
E = -½ Σᵢⱼ wᵢⱼ sᵢ sⱼ
```

Think of this as: for every pair of neurons, if they agree (both +1 or both -1) and the weight is positive, that *lowers* the energy. If they disagree, it *raises* the energy. The negative sign in front means "agreement = low energy = good." The total energy is just the sum of these pairwise agreements/disagreements across the whole network, weighted by how strong each connection is.

**How inference works:**
- Pick a random neuron, say neuron 4
- Ask: "what do my neighbors want me to be?" Compute `hᵢ = Σⱼ wᵢⱼ sⱼ`. This is just the weighted vote from all other 9 neurons. If most of neuron 4's strongly-connected neighbors are on, this sum will be positive, pulling neuron 4 toward +1.
- If `hᵢ > 0`, set neuron 4 to +1. Otherwise, -1.
- Pick another random neuron, repeat. Keep going until nothing changes.

Every single flip is guaranteed to decrease (or maintain) the total energy. So the network is always rolling downhill on the energy landscape, settling into a local minimum, which is one of the stored patterns.

**How learning works:** Hebbian learning. For each pattern you want to store:

```
Δwᵢⱼ = sᵢ · sⱼ
```

This is about as simple as learning gets. If neurons i and j are both on in a pattern, `(+1)(+1) = +1`, so the weight goes up and the connection strengthens. If one is on and the other off, `(+1)(-1) = -1`, the weight goes down. You're carving a valley in the energy landscape for each pattern you store.

**Brain parallels:** Hebbian learning is directly borrowed from neuroscience ("neurons that fire together wire together"). The associative memory behavior (you give it a partial or noisy version of a pattern and it completes it) is very much how human memory seems to work. You hear a few notes of a song and the rest pops into your head.

**Problems:**
- With 10 neurons you can only reliably store about **1 pattern** (~0.14 × 10). With 1000 neurons, ~140 patterns. Capacity scales as **0.14N**. Try to store more and the valleys in the energy landscape start merging, so retrieval gives you garbage.
- No latent space. There's nothing hidden; the memory *is* the pattern of neuron activations itself. Unlike a VAE where you have a compressed bottleneck representation, here what you see is what you get.
- **Weights must be symmetric** (`wᵢⱼ = wⱼᵢ`). The weight from neuron 3 to neuron 7 must equal the weight from 7 to 3. This symmetry is the *entire reason* the energy function works. It's what lets you prove energy only goes down. Without it, the network can oscillate forever, cycle between states, or behave chaotically. There's no consistent "downhill" anymore.

And here's the catch: **the brain does not have symmetric synapses**. The connection from neuron A to B can differ completely from B to A: different strength, different sign, sometimes one direction doesn't even exist.

**Aside on asymmetric weights:** If you allow `wᵢⱼ ≠ wⱼᵢ`, you can store roughly **2× more patterns**, but they become sequential. Instead of settling into a fixed memory, the network cycles through a sequence of states. This is suggestive of how the brain might store temporal patterns (like melodies or motor sequences), but you lose the energy convergence guarantee.

---

## Sparse Hopfield Networks

**Setup:** Same 10 neurons, same connections, but now add a **threshold θ** that each neuron's input must exceed before it's allowed to activate. Think of it as a bouncer at the door: you need a strong enough signal to get in.

**How inference works:**
- Pick a random neuron
- Compute its input `hᵢ = Σⱼ wᵢⱼ sⱼ` (same weighted vote as before)
- But now: set `sᵢ = +1` only if `hᵢ > θ`, otherwise `sᵢ = -1`
- Repeat until convergence

The threshold keeps most neurons off for any given pattern. Where a standard Hopfield net might have 7 out of 10 neurons active, a sparse version might only have 2 or 3 active. Each pattern is encoded by a small, selective group.

**How learning works:** Same Hebbian rule, but since patterns are sparse, each pattern touches fewer weights. This means less interference between stored memories: pattern A's weights don't step on pattern B's weights as much.

**Brain parallels:** This is much closer to biology. Cortical neurons are famously sparse in their firing; at any moment, only a small fraction are active. The threshold plays the role of **inhibitory interneurons** in the brain, which suppress weak activations and keep the overall firing rate low.

**What it fixes:**
- Capacity jumps to **N / log(N)**. For 1000 neurons, that's roughly 145 patterns vs. 140, not dramatic at that scale, but for large N the gap grows substantially. More importantly, the memories are much cleaner and more robust.
- Activation patterns are more biologically plausible.

**Remaining problems:** Still deterministic, still no generative model, still requires symmetric weights.

---

## Boltzmann Machines

**Setup:** Still 10 neurons, all connected to all, but now split into two groups: say 6 **visible neurons** (representing data you can observe) and 4 **hidden neurons** (representing latent structure you can't see). The energy function becomes:

```
E = -½ Σᵢⱼ wᵢⱼ sᵢ sⱼ - Σᵢ bᵢ sᵢ
```

The new `bᵢ` term is a bias for each neuron. Think of it as how much a neuron wants to be on regardless of its neighbors.

**How inference works:** Here's the key change: instead of deterministically flipping neurons, we make it **probabilistic**.
- Pick a random neuron
- Compute its input `hᵢ = Σⱼ wᵢⱼ sⱼ + bᵢ`
- Compute `P(sᵢ = 1) = σ(hᵢ / T)` where σ is the sigmoid function and T is a "temperature" parameter

The sigmoid converts the input into a probability between 0 and 1. If the input is strongly positive, the probability is close to 1, so the neuron will *probably* turn on, but not for certain. If the input is near zero, it's a coin flip. The temperature T controls how noisy this is: high T = more random, low T = more deterministic (approaching a Hopfield net).

This comes from the **Boltzmann distribution** in physics: `P(state) ∝ exp(-E/T)`. States with lower energy are exponentially more likely, but higher-energy states still get visited occasionally. The network doesn't just roll to the nearest minimum. It wanders the energy landscape, spending most of its time in the valleys but occasionally hopping between them.

- Repeat this stochastic updating until the network reaches **thermal equilibrium**: a steady state where it's sampling from the Boltzmann distribution.

**How learning works:** Since we changed the update rule, plain Hebbian learning doesn't work anymore. We need **contrastive Hebbian learning**, which runs in two phases:

- **Clamped phase:** Force the 6 visible neurons to match a training example (literally clamp them). Let the 4 hidden neurons settle by stochastic sampling. Once settled, record how correlated each pair of neurons is: `⟨sᵢ sⱼ⟩_data`. This captures "what the network does when it sees real data."
- **Free phase:** Unclamp everything. Let all 10 neurons run freely until equilibrium. Record correlations again: `⟨sᵢ sⱼ⟩_model`. This captures "what the network does on its own."
- Update: `Δwᵢⱼ = ⟨sᵢ sⱼ⟩_data - ⟨sᵢ sⱼ⟩_model`

The intuition: if two neurons are more correlated in the data than in the model's own fantasies, strengthen their connection. If the model already thinks they're too correlated, weaken it. You're pushing the network's internal model to match reality.

**Brain parallels:** Stochastic firing is much more biologically realistic since real neurons are noisy. Hidden neurons give the network internal representations, like how the brain builds abstract concepts from raw sensory input. And learning is still local: each weight only needs information from its two connected neurons, no global error signal required.

**What it fixes:**
- Now a proper generative model that can learn a probability distribution over data and sample new examples
- Has a latent space via hidden neurons
- Handles noise and uncertainty naturally

**Problems:** All 10 neurons are connected to all other 10 neurons: visible to visible, hidden to hidden, visible to hidden. The free phase requires running the network until true thermal equilibrium, which is *extremely* slow. For anything beyond toy problems, training is impractical.

---

## Restricted Boltzmann Machines

**Setup:** Same 6 visible and 4 hidden neurons, but **remove all within-layer connections**. Visible neurons aren't connected to each other. Hidden neurons aren't connected to each other. The only wires that remain go between the two layers. The network is now a clean bipartite graph.

**How inference works:** This restriction buys you something huge: **conditional independence**.
- Given the visible layer, all 4 hidden neurons are completely independent of each other. Each one only depends on the visible neurons, not on what the other hidden neurons are doing.
- Given the hidden layer, all 6 visible neurons are independent of each other.

So inference becomes:
- Clamp visible layer → compute all 4 hidden activations **in one parallel pass**: `P(hⱼ = 1) = σ(Σᵢ wᵢⱼ vᵢ + bⱼ)`
- From hidden layer → reconstruct all 6 visible activations **in one parallel pass**: `P(vᵢ = 1) = σ(Σⱼ wᵢⱼ hⱼ + aᵢ)`
- Alternate back and forth (this is Gibbs sampling, but now each step is a full layer update instead of a single neuron)

**How learning works:** **Contrastive divergence (CD-k)**, a practical approximation that sidesteps the equilibrium problem:
- Clamp a training example on visible neurons
- One pass up: compute hidden activations → record `⟨vᵢ hⱼ⟩_data`
- One pass down: reconstruct visible neurons from hidden
- One pass up again: recompute hidden → record `⟨vᵢ hⱼ⟩_recon`
- Update: `Δwᵢⱼ = ⟨vᵢ hⱼ⟩_data - ⟨vᵢ hⱼ⟩_recon`

In practice, just k=1 (one up-down-up cycle) works surprisingly well. You don't need to wait for equilibrium; a single reconstruction step gives you a good enough gradient estimate.

**What it fixes:**
- Training is fast and parallelizable, since entire layers update at once
- This is what made energy-based generative models practical
- Stackable: Hinton (2006) stacked RBMs into **deep belief networks**. Train one RBM, use its hidden layer as the visible layer for the next, and so on. This was the pretraining breakthrough that helped kick off modern deep learning.

**Remaining problems:** Still requires symmetric weights. Still not really how the brain is wired. And soon after, backprop + GPUs on standard feedforward nets overtook this entire lineage in practice.

---

## Predictive Coding: Same Destination, Different Route

**Setup:** Instead of a fully connected or bipartite network, imagine a hierarchy of layers, like a stack. Each layer has two types of units: **prediction neurons** that generate a top-down prediction of the layer below, and **error neurons** that compute the mismatch.

Say layer 3 tries to predict what layer 2 should look like. Layer 2 compares that prediction against what it actually sees (from layer 1 below) and sends the difference, the **prediction error**, back up.

**How inference works:**
- Each layer sends predictions downward: "I think the layer below looks like this"
- Error neurons compute: `eₗ = xₗ - f(xₗ₊₁)`, the difference between the actual activity and the prediction from above
- These errors propagate upward to update the higher layer's representations
- The whole system minimizes **variational free energy**, which in the simplest case is just the sum of squared errors: `F = Σₗ ||eₗ||²`

Think of it as: every layer is trying to be a good predictor of the layer below. When it's wrong, the error signal tells it how to adjust. The whole hierarchy is collectively minimizing surprise.

Each layer only talks to its immediate neighbors. There's no global error signal that needs to propagate through the entire network.

**How learning works:** Weight updates come from the same free energy objective and are **local**: each synapse adjusts based only on information available at its two endpoints. No backpropagation needed.

**Brain parallels:** This comes from **Bayesian brain theory** rather than statistical physics, a completely different intellectual tradition. The idea is that the brain is fundamentally a prediction machine. It constantly generates expectations about incoming sensory data, and only bothers transmitting what it didn't expect (the errors). There's strong empirical support for this: prediction error signals have been found throughout cortex.

**Why this connects to the energy-based story:** This is where Beren Millidge's work is illuminating. Despite coming from a totally different direction, predictive coding shares deep structural parallels with the Hopfield → Boltzmann → RBM lineage:

- Both minimize an energy-like objective (Boltzmann energy vs. variational free energy)
- Both separate representation units from error/visible units
- Both perform approximate Bayesian inference
- Both rely on **only local computation**: each neuron updates based on its neighbors, no global backprop

That last point is the deep connection. The brain almost certainly doesn't do textbook backpropagation; there's no known mechanism for it. These two lineages, statistical physics (Hopfield → Boltzmann → RBM) and Bayesian inference (predictive coding), arrived at the same core insight from completely different starting points: you can do powerful learning with only local update rules.

---

## The Pattern

Each step in this progression either added biological plausibility (sparse coding, stochastic firing, local learning) or computational tractability (symmetric weights, restricted connectivity, contrastive divergence), usually trading one for the other. The recurring finding is that making things more brain-like and making things more trainable kept pulling in the same direction, even across unrelated research communities.


*Note: This blog was written with a lot of assistance from an LLM (thank you Claude Opus!) to refine and simplify my scrappy notes, but the overall intuitions, flow, and points to be discussed are still mine.*
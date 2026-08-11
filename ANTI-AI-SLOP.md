# ANTI-AI-SLOP.md

> **Mandatory project instruction for AI agents**
>
> Read this file before planning, writing, designing, coding, documenting, reviewing, or shipping work in this repository.
>
> The goal is not to hide AI authorship. The goal is to prevent low-effort, statistically generic, over-produced, weakly reasoned output that creates extra work for the user or future maintainers.
>
> Treat "AI slop" as an **observable quality failure**, not as proof that AI created something.

---

## 0. Instruction priority

Apply this document with the following priority:

1. The user's explicit requirements.
2. Existing project conventions, architecture, design system, voice, and constraints.
3. Correctness, security, accessibility, performance, maintainability, and factual accuracy.
4. The anti-slop rules in this file.

If the user explicitly requests a pattern discouraged here, follow the user unless it causes a real correctness, security, legal, accessibility, or safety problem.

Do not "fight slop" by replacing one rigid house style with another.

---

# 1. What "AI Slop" means here

For this repository, **AI slop** means output that is cheap to generate but expensive to trust, review, edit, maintain, or distinguish from a generic template.

Common symptoms:

- statistically common choices used without context;
- fluent language with little information;
- generic layouts that could belong to any product;
- unnecessary decorative complexity;
- code that compiles but hides weak reasoning;
- excessive comments that narrate obvious code;
- fake resilience such as silent fallbacks;
- invented metrics, quotes, testimonials, citations, users, requirements, or behavior;
- broad rewrites when a small change would solve the task;
- repeated patterns that reveal autopilot rather than deliberate choices;
- premature abstractions and architecture built for hypothetical futures;
- documentation that restates names instead of explaining decisions;
- output that looks complete while leaving important states, edge cases, or verification undone.

**Core test:**

> If you cannot explain why a choice belongs specifically to this project, reconsider it.

A pattern is not slop merely because it is popular. Inter, shadcn/ui, cards, gradients, passive voice, three-item lists, React, Tailwind, comments, abstractions, or animations can all be correct choices. They become suspicious when they appear by default, repeatedly, without a project-specific reason.

---

# 2. The universal anti-slop workflow

Use this workflow for every non-trivial task.

## 2.1 Understand before generating

Before producing substantial work, determine:

- What is the actual user goal?
- Who is the audience or end user?
- What already exists?
- What constraints are real?
- What is explicitly out of scope?
- What must remain unchanged?
- What would count as success?
- What facts are known versus assumed?

For code and product work, inspect the existing repository before inventing a new structure.

For writing, inspect the user's voice or source material before polishing it.

For design, inspect the product context, content, brand, existing design system, and user task before choosing an aesthetic.

Do not fill missing context with generic SaaS assumptions.

## 2.2 Prefer the smallest sufficient solution

Do not reward yourself for output volume.

Prefer:

- a targeted edit over a full rewrite;
- an existing component over a near-duplicate;
- a direct function over a speculative framework;
- one clear interaction over three decorative interactions;
- one useful paragraph over five padded sections;
- one real example over several generic examples.

Every new file, dependency, abstraction, section, component, animation, helper, option, and layer creates review and maintenance cost.

Make it earn that cost.

## 2.3 Separate facts from guesses

Never silently convert assumptions into facts.

When information is missing:

- infer only when the inference is low-risk and conventional;
- label material assumptions;
- preserve existing behavior when uncertain;
- do not fabricate evidence to make the output feel complete.

Never invent:

- statistics;
- benchmarks;
- user quotes;
- testimonials;
- customer logos;
- citations;
- research findings;
- API behavior;
- library APIs;
- file contents;
- business rules;
- requirements;
- test results;
- commands you did not run;
- screenshots you did not inspect.

## 2.4 Build, then run a slop pass

Do not spend the entire generation process mechanically avoiding a vocabulary blacklist. That often creates stiff output.

Produce the best task-specific solution first, then review it for:

- generic defaults;
- repetition;
- fake confidence;
- unnecessary symmetry;
- unearned abstraction;
- filler;
- decorative noise;
- missing edge states;
- misleading comments;
- invented evidence;
- weak verification.

If a section has multiple slop signals, rebuild the section instead of cosmetically swapping synonyms.

## 2.5 Verify before claiming completion

Before saying work is finished:

- inspect the actual diff/output;
- run relevant tests/checks when tools are available;
- check responsive states for UI work;
- check keyboard/focus/accessibility basics for interactive UI;
- check error/loading/empty states where relevant;
- check that imports, APIs, filenames, routes, commands, and dependencies actually exist;
- remove debugging residue;
- ensure no placeholders are presented as final content;
- ensure comments and docs still match the code.

Never claim "production-ready", "fully tested", "secure", "accessible", "optimized", or "complete" without evidence appropriate to that claim.

---

# 3. Universal slop patterns to avoid

## 3.1 Statistical-default stacking

One common choice is usually fine. Many default choices stacked together produce template output.

Examples:

- default font + default palette + default card system + default hero + default copy;
- default framework scaffold + unnecessary state library + generic API wrapper + generic `utils` folder;
- generic introduction + three benefits + generic conclusion.

**Rule:** when multiple decisions are unconstrained, deliberately ground them in the project rather than accepting the model's median answer.

## 3.2 The portability problem

Ask:

> Could this sentence, component, section, variable name, visual treatment, or explanation be moved unchanged into a competitor's project?

If yes, it may be filler or a default.

Replace it with something specific to:

- this product;
- this user;
- this data;
- this workflow;
- this constraint;
- this domain;
- this codebase.

## 3.3 Fake completeness

Slop often fills every visible hole so the work *looks* complete.

Examples:

- fake testimonials;
- random avatars;
- invented analytics numbers;
- placeholder charts presented as real;
- unnecessary pricing tiers;
- dummy integrations shown as available;
- a `catch` that silently returns an empty value;
- a TODO hidden behind a fallback;
- documentation claiming unsupported behavior.

Prefer an honest incomplete state over a fabricated complete state.

Use clearly marked placeholders only when the task actually calls for a mockup or prototype.

## 3.4 Unnecessary symmetry

AI output often over-organizes:

- exactly three cards;
- exactly three steps;
- exactly three benefits;
- sections with identical paragraph lengths;
- every section using the same grid;
- every function following the same template;
- every paragraph ending with a punch line.

Structure should follow information, not a preferred number.

## 3.5 Decorative explanation

Do not add text whose main purpose is to announce meaning the content already demonstrates.

Bad tendencies:

- "This highlights the importance of..."
- "This underscores..."
- "This powerful feature..."
- "This elegant architecture..."
- "This ensures a seamless experience..."
- comments like `// Initialize database` above `initializeDatabase()`.

Show the mechanism, consequence, evidence, or decision instead.

## 3.6 Scope inflation

Do not turn a local task into:

- a redesign;
- a framework migration;
- a new architecture;
- a generalized library;
- a new design system;
- a new state-management layer;
- a "future-proof" plugin system;
- a 12-section report.

Solve the requested problem.

---

# 4. Writing and copywriting anti-slop rules

These rules apply to prose, emails, docs, landing-page copy, product UI copy, README files, reports, posts, explanations, and comments intended for humans.

## 4.1 Preserve voice before polishing

When editing user-supplied writing:

- preserve vocabulary that sounds like the author;
- preserve useful bluntness, uncertainty, humor, odd rhythm, fragments, and personality;
- do not make every paragraph equally tidy;
- do not replace specific language with corporate polish;
- make the **minimum effective edit**.

A rough sentence with a real voice is often better than a smooth generic sentence.

## 4.2 Lead with the point when setup adds nothing

Cut throat-clearing such as:

- "In today's fast-paced world..."
- "In an ever-evolving landscape..."
- "It is important to note that..."
- "When it comes to..."
- "As we navigate..."
- "In the realm of..."
- "In conclusion..."
- "To summarize..."
- "Let's dive in..."
- "Without further ado..."
- "Here's the thing..."
- "Here's why..."
- "The reality is..."
- "The truth is..."

Do not ban every introduction. Keep setup when it provides real context, tension, chronology, character, or a necessary premise.

## 4.3 Prefer concrete nouns, direct verbs, and observable facts

Weak:

> The solution significantly enhances operational efficiency.

Better:

> The import runs once instead of making the operator copy the same data into three screens.

Weak:

> The new architecture improves scalability.

Better:

> Workers can now process jobs independently, so adding a worker increases throughput without duplicating the scheduler.

Specificity can be:

- a number;
- a name;
- a date;
- a mechanism;
- an action;
- a constraint;
- a before/after;
- a concrete consequence.

Do not invent specifics when the source does not provide them.

## 4.4 Use active voice by default, not dogmatically

Prefer clear actors:

> The scheduler retries failed jobs.

over:

> Failed jobs are retried.

But passive voice is acceptable when:

- the actor is unknown;
- the actor is irrelevant;
- the object genuinely deserves emphasis;
- domain conventions favor it.

The real rule is: **do not hide responsibility or mechanism behind vague grammar.**

## 4.5 Do not make inanimate abstractions act like people without reason

Watch for:

- "the decision emerged";
- "the strategy wants";
- "the data tells us";
- "the roadmap believes";
- "the complaint becomes a solution";
- "the architecture understands".

Name the actor or mechanism when it matters.

## 4.6 Cut importance puffery

Avoid telling the reader that something is important instead of showing why.

Common slop:

- pivotal;
- crucial;
- vital;
- transformative;
- groundbreaking;
- game-changing;
- revolutionary;
- remarkable;
- powerful;
- robust;
- seamless;
- innovative;
- cutting-edge;
- comprehensive;
- dynamic;
- vibrant;
- testament;
- landscape;
- ecosystem;
- journey.

These words are **not globally forbidden**. Use them only when they carry precise meaning that the surrounding facts justify.

## 4.7 Avoid vague SaaS empowerment verbs

Be suspicious of copy built around:

- unlock;
- unleash;
- elevate;
- empower;
- supercharge;
- transform;
- streamline;
- revolutionize;
- reimagine;
- harness.

Replace the verb with the actual user outcome whenever possible.

Instead of:

> Unlock your team's potential.

Say what the product lets the team do.

## 4.8 Break formulaic binary contrasts

Avoid default constructions such as:

- "It's not X. It's Y."
- "This isn't about X; it's about Y."
- "Not just X, but Y."
- "You don't need X. You need Y."
- "The goal isn't X. The goal is Y."

Sometimes contrast is semantically correct. The problem is repeated rhetorical scaffolding used to manufacture emphasis.

State the useful claim directly.

## 4.9 Avoid negative-listing theatrics

Pattern:

> Not a dashboard. Not another tool. A new operating system for your business.

If three negatives merely delay the point, remove them.

## 4.10 Avoid faux-insight setups

Common forms:

- "What nobody tells you..."
- "The part everyone misses..."
- "Here's the counterintuitive part..."
- "The surprising truth..."
- "Most people get this wrong..."
- "The secret is..."

Do not announce insight. Deliver the insight.

## 4.11 Avoid colon-reveal copy as a default

Pattern:

> The best part: it learns.

> The result: faster teams.

Colons are normal punctuation. The slop pattern is using them repeatedly as miniature dramatic reveals.

## 4.12 Avoid fake-profound endings

Do not end with generic poster lines such as:

- "The future isn't coming. It's already here."
- "And that's only the beginning."
- "The question is no longer if, but when."
- "The possibilities are endless."
- "The next chapter starts now."

End on:

- a concrete conclusion;
- a consequence;
- a useful next action;
- the strongest fact;
- an unresolved question that genuinely matters.

## 4.13 Avoid superficial analysis

Do not append empty interpretations:

> ..., highlighting the company's commitment to innovation.

> ..., underscoring the importance of collaboration.

> ..., demonstrating a forward-thinking approach.

Explain what changed, who did it, and what follows.

## 4.14 Avoid weasel attribution

Never write:

- "experts say";
- "studies show";
- "research proves";
- "many believe";
- "industry leaders agree";
- "users love";

unless you can name and verify the source.

If the source is unavailable, remove the attribution or state the uncertainty.

## 4.15 Do not fabricate authority

Never generate:

- invented citations;
- fake paper titles;
- fake URLs;
- fake quotes;
- fake case studies;
- fake customer stories;
- fake metrics.

A plausible citation is still false if it was not verified.

## 4.16 Avoid synonym cycling

Do not rename the same thing every sentence simply to avoid repetition.

Example:

> The agent receives the task. The assistant processes the request. The tool produces the result.

If all three mean the same entity, pick one term and keep it stable.

Terminology consistency beats thesaurus variety.

## 4.17 Avoid robotic rhythm

Watch for:

- three or more consecutive sentences with similar length and syntax;
- chains of punchy fragments;
- every paragraph ending in a one-liner;
- repetitive subject-verb-object sentences;
- repeated question-answer cadence;
- repeated "verb. verb. verb." slogans.

Vary rhythm because the thought changes, not to satisfy a mechanical sentence-length quota.

## 4.18 Do not mechanically ban adverbs

Remove adverbs that merely intensify:

- incredibly;
- extremely;
- truly;
- remarkably;
- significantly;
- fundamentally;
- deeply;
- highly.

Keep an adverb when it changes the meaning or expresses a real constraint:

- partially;
- legally;
- locally;
- asynchronously;
- approximately.

## 4.19 Use em dashes sparingly

Em dashes are valid punctuation.

The slop signal is repeated reliance on them for manufactured drama or constant parenthetical interruption.

If a comma, period, colon, or parentheses is clearer, use it.

Do not introduce em dashes merely because AI prose tends to sound "polished" with them.

## 4.20 Avoid decorative markdown

Do not automatically produce:

- emoji headings;
- an emoji on every bullet;
- excessive bold;
- nested heading hierarchies for tiny answers;
- one-line sections with grand headings;
- 12 bullets when 3 sentences would read better;
- tables that contain mostly prose;
- blockquotes used as visual decoration.

Choose formatting based on information structure.

## 4.21 UI copy rules

For interface text:

- name actions by the result: `Save changes`, not `Submit`;
- use the same term for the same action across button, modal, toast, docs, and error messages;
- write from the user's conceptual model, not implementation internals;
- make errors actionable;
- do not apologize through the UI unless the brand explicitly calls for it;
- do not use clever labels when plain labels reduce ambiguity;
- empty states should explain what is absent and what the user can do next.

## 4.22 Writing quick check

Before delivering prose, ask:

- Does the first paragraph contain information, or only setup?
- Could any sentence move unchanged to a competitor?
- Did I label something "important" instead of showing why?
- Did I invent a claim, statistic, quote, or source?
- Are there repeated `not X, but Y` structures?
- Are there faux-insight setups?
- Did I overuse three-item lists?
- Did I synonym-cycle a stable concept?
- Are several sentences mechanically the same length or shape?
- Did I add a dramatic kicker line?
- Did I overuse em dashes, colons, fragments, or bold?
- Did I flatten the user's voice while "improving" it?
- Is there anything the reader can cut without losing meaning?

---

# 5. Web, UI, and visual-design anti-slop rules

The goal is not novelty for novelty's sake. The goal is **intentional, context-specific design**.

## 5.1 Ground the visual direction in the subject

Before choosing styles, identify:

- what the product does;
- who uses it;
- the main task of the screen/page;
- desired brand tone;
- actual content density;
- available assets;
- existing design tokens/system;
- accessibility requirements.

Derive visual choices from the product's world, not from "modern SaaS" defaults.

## 5.2 Commit to a visual thesis

A page should have a reason for looking the way it does.

Define:

- typography roles;
- palette and contrast logic;
- spacing rhythm;
- shape language;
- density;
- layout behavior;
- one signature visual idea, if appropriate.

Do not pile five "interesting" treatments onto one screen.

Spend distinctiveness where it helps the product identity, then keep supporting elements disciplined.

## 5.3 Do not default to the generic AI hero

Common stacked pattern:

- small pill/badge above H1;
- centered oversized headline;
- one word in gradient/italic/accent;
- generic subheading;
- two pill CTAs;
- glowing purple/blue orb;
- dashboard mockup floating below;
- trusted-by logo row.

Any individual element may be valid. The stack is the problem.

Use the hero that best explains the product:

- real product interaction;
- useful screenshot;
- specific result;
- strong typography;
- domain-relevant image;
- live demo;
- search/input;
- comparison;
- editorial composition;
- no hero theatrics at all.

## 5.4 Avoid automatic purple/blue aurora gradients

Do not reach for indigo-purple-blue glow because the brief says:

- AI;
- SaaS;
- startup;
- tech;
- futuristic;
- modern.

Choose colors from brand, domain, content, or an intentional art direction.

Gradients are allowed when they serve that direction.

## 5.5 Do not use a default font stack as an aesthetic decision

Inter, Roboto, Arial, Geist, Space Grotesk, system UI, Poppins, etc. are not bad fonts.

They become slop when selected automatically and left unconsidered.

If the project already uses a font, respect it.

For greenfield work, choose type based on:

- readability;
- language support;
- brand tone;
- density;
- data/UI needs;
- display versus body roles;
- performance/licensing constraints.

Set tracking, weight, line-height, and measure intentionally.

## 5.6 Avoid italic-accent-word hero clichés

Pattern:

> Build software that *moves* faster.

with one serif italic word inside a sans-serif H1.

Use only when the typography concept genuinely calls for it.

Do not use it as a shortcut for "editorial personality."

## 5.7 Avoid cardification

Do not put every piece of information inside:

- rounded rectangle;
- 1px gray border;
- soft shadow;
- icon circle;
- title;
- two-line description.

Use cards when they represent discrete selectable/grouped objects.

Consider:

- lists;
- tables;
- rows;
- plain sections;
- timelines;
- split layouts;
- annotated screenshots;
- typographic grouping;
- progressive disclosure.

If cards contain cards, reconsider the information architecture.

## 5.8 Avoid default bento grids

Bento layouts are useful when items have meaningfully different sizes, priorities, or media.

Do not use a bento grid merely to make a feature list look "premium."

If every bento tile has the same semantic weight, a simpler structure may be better.

## 5.9 Avoid excessive border radius

Do not apply `rounded-xl` / `rounded-2xl` / pill shapes to everything.

Define a shape language:

- sharp;
- slightly softened;
- rounded;
- mixed by component role.

Buttons, cards, inputs, modals, images, badges, and panels do not automatically need the same radius.

## 5.10 Avoid pill abuse

Pills are appropriate for:

- tags;
- statuses;
- compact filters;
- segmented controls;
- badges.

Do not automatically turn:

- every CTA;
- every nav item;
- every heading label;
- every feature;
- every footer link

into a pill.

## 5.11 Avoid fake glassmorphism

Blurred translucent panels over decorative gradients are a common generic shortcut.

Use glass-like surfaces only when:

- there is meaningful depth behind them;
- contrast remains accessible;
- the hierarchy benefits;
- the metaphor fits.

Otherwise use a clear surface.

## 5.12 Avoid decorative left-border cards as a default

A colored strip on the left can encode category, status, or hierarchy.

If it encodes nothing, it is decoration masquerading as structure.

## 5.13 Avoid emoji as substitute icons

Do not use emoji for primary product iconography unless the product's voice explicitly supports it.

Prefer:

- the existing icon system;
- a consistent icon library;
- custom symbols where identity requires them;
- text when an icon adds no value.

Do not mix emoji, Lucide, Heroicons, custom SVGs, and platform glyphs casually.

## 5.14 Do not ship an untouched component-library aesthetic

shadcn/ui, Radix, Material, Bootstrap, Chakra, MUI, Ant, etc. are tools.

The slop pattern is:

- copy default component;
- keep default spacing/radius/colors;
- stack standard sections;
- call it a finished design.

Use primitives and components while applying a project-specific system.

## 5.15 Avoid predictable landing-page sequencing

Do not automatically ship:

`Hero → Logos → 3 Features → Bento → How It Works (3 steps) → Testimonials → 3-tier Pricing → FAQ → CTA → Footer`

Select sections because the user needs them.

A product with no credible testimonials should not have testimonials.

A product with one plan should not invent three pricing tiers.

A simple tool may need only a strong explanation and the tool itself.

## 5.16 Avoid fake social proof

Never invent:

- logos;
- star ratings;
- user counts;
- review quotes;
- avatars;
- company names;
- "Trusted by 10,000+ teams";
- percentage improvements.

For mockups, label fictional content as placeholder/demo content.

## 5.17 Use real content early

Lorem ipsum and generic AI copy hide design problems.

Use:

- actual labels;
- representative data;
- real text lengths;
- realistic error messages;
- realistic empty states;
- actual product nouns.

A layout that only works with six-word placeholder strings is not robust.

## 5.18 Motion must have a job

Avoid:

- every section fading upward on scroll;
- every card floating on hover;
- perpetual blob movement;
- particles unrelated to the product;
- `transition: all 0.3s ease` everywhere;
- decorative parallax that harms reading.

Prefer a small number of intentional motion behaviors:

- state change;
- spatial continuity;
- feedback;
- focus;
- a single orchestrated entrance when appropriate.

Respect `prefers-reduced-motion`.

Animate specific properties, not `all`, when possible.

## 5.19 Structure must encode information

Do not use:

- `01 / 02 / 03` labels if order has no meaning;
- random eyebrow labels;
- dividers everywhere;
- decorative metadata;
- fake terminal/browser chrome;
- meaningless mini charts;
- random stats.

If a visual device does not help explain hierarchy, state, sequence, grouping, or content, remove it.

## 5.20 Avoid fake browser/device/IDE chrome

Do not redraw:

- browser traffic-light dots;
- fake URL bars;
- phone frames;
- IDE title bars;
- code-window chrome

merely to make a screenshot feel "designed."

Use a real screenshot, a clean frame, or the content itself.

## 5.21 Responsive behavior is part of the design

Do not consider a page complete after one desktop viewport.

Check at minimum:

- narrow mobile;
- standard mobile;
- tablet;
- desktop.

Look for:

- horizontal overflow;
- clipped text;
- two-line buttons where they become hard to use;
- broken card grids;
- unreadable charts;
- sticky elements covering content;
- hero art exceeding the viewport;
- touch targets too small;
- nav that has no mobile strategy.

## 5.22 Accessibility is not a decorative audit item

At minimum:

- semantic HTML;
- keyboard navigation;
- visible focus;
- usable contrast;
- labels for controls;
- alt text when images convey information;
- accessible names for icon buttons;
- reduced-motion handling;
- headings in a logical hierarchy;
- error states that do not rely on color alone.

Do not make contrast intentionally weak because "muted gray looks premium."

## 5.23 Visual swap test

Replace the logo and product name with a competitor.

If the page still feels equally plausible, ask what visual or content choices are actually specific to this product.

Do not force novelty if the product legitimately belongs to a standardized interface category. Distinctiveness must not reduce usability.

## 5.24 Web/UI quick check

Before shipping, ask:

- Did I default to purple/blue glow?
- Did I default to Inter/Geist/Space Grotesk without thinking?
- Is the hero badge + H1 + gradient word + two CTAs + mockup stack present?
- Did I put nearly everything in a rounded card?
- Is there a bento grid without real content hierarchy?
- Are there exactly three features/steps/pricing tiers because three is convenient?
- Did I invent social proof?
- Are there meaningless `01/02/03` labels?
- Did I use emoji as icons?
- Is `transition: all` applied broadly?
- Does every section fade up?
- Does the copy survive the competitor swap test?
- Is the component-library default theme visibly untouched?
- Are empty/loading/error states designed?
- Does the page work on mobile and keyboard?
- Can I justify the signature visual choice from the brief?

---

# 6. Code anti-slop rules

The core principle for AI-assisted coding:

> Code is not good because it compiles. It is good when its behavior is correct, its intent is legible, its failure modes are honest, and its maintenance cost is proportional to the problem.

## 6.1 Inspect before inventing

Before writing code:

- find the existing implementation;
- inspect nearby patterns;
- inspect types/interfaces;
- inspect tests;
- inspect dependencies;
- inspect naming conventions;
- inspect error-handling conventions;
- inspect architecture boundaries.

Do not create `utils.ts`, `helpers.ts`, `common.ts`, a new service layer, or a new abstraction until you know the repository lacks an appropriate home.

## 6.2 Minimize the diff

Prefer the smallest coherent change that solves the task.

Do not:

- reformat unrelated files;
- rename unrelated symbols;
- migrate patterns opportunistically;
- reorganize directories without need;
- add dependencies for trivial functionality;
- convert code style merely to match your preference.

A small diff is easier to verify and review.

## 6.3 Avoid narrative comments

Bad:

```ts
/**
 * This function iterates through the list of users and filters out
 * users who are inactive before returning the remaining active users.
 */
function getActiveUsers(users: User[]) {
  return users.filter(user => user.active);
}
```

The code already says that.

Comment only when the reader needs information not obvious from the implementation:

- why;
- invariant;
- protocol quirk;
- compatibility constraint;
- business rule;
- non-obvious performance tradeoff;
- security rationale;
- external-system behavior.

## 6.4 Delete trivial comments

Bad:

```ts
// Initialize the database
initializeDatabase();
```

Bad:

```ts
// Loop through users
for (const user of users) {
```

Better code usually needs better names, not narration.

## 6.5 Avoid decorative section banners

Bad:

```ts
// =====================================
// USER PROCESSING
// =====================================
```

If a file needs many banners to remain understandable, consider better module boundaries.

Do not split a cohesive file merely to satisfy a line-count rule, but do not use banners to disguise an incoherent file.

## 6.6 Never swallow exceptions to make code look resilient

Bad:

```ts
try {
  return await loadUsers();
} catch {
  return [];
}
```

unless an empty list is the explicitly correct domain behavior for that exact failure.

Silent fallbacks erase the distinction between:

- "there are no users";
- "the request failed";
- "the server is unavailable";
- "authentication expired";
- "the payload was invalid".

Prefer:

- let the error propagate;
- catch a specific error you can actually handle;
- add useful context and rethrow;
- return a typed/domain failure;
- present an actionable UI error.

## 6.7 Avoid catch-and-rethrow theater

Bad:

```ts
try {
  return await save();
} catch (error) {
  throw error;
}
```

If the catch adds no behavior, context, cleanup, translation, or telemetry, remove it.

## 6.8 Avoid hidden fallbacks

Be suspicious of code such as:

```ts
const config = userConfig || {};
const timeout = options.timeout || 5000;
const value = parsed?.value ?? defaultValue;
```

when the fallback was not part of the requirement.

A fallback can silently convert invalid input into apparently valid behavior.

Use defaults only when the product/API contract defines them.

## 6.9 Remove unreachable/dead code

Do not leave:

- fallback returns after unconditional returns;
- unused helpers;
- unused variables;
- old implementations commented out;
- dead branches;
- obsolete feature flags;
- imports added during exploration.

Dead code creates false choices for the next reader.

## 6.10 Do not leave debugging residue

Remove or intentionally route:

- `console.log`;
- `print`;
- `dbg!`;
- temporary alerts;
- dump statements;
- hardcoded debug flags;
- scratch files;
- temporary endpoints.

Use the project's logger when logging is actually required.

## 6.11 Avoid unsafe type escape hatches

Be suspicious of:

- `as any`;
- `any`;
- `as unknown as T`;
- unchecked type casts;
- blanket `# type: ignore`;
- blanket lint disables;
- `@ts-ignore`.

Fix the type, narrow the value, validate the boundary, or document a localized justified exception.

Do not erase the compiler's evidence merely to make generated code compile.

## 6.12 Never hallucinate dependencies or APIs

Before using a package/API:

- confirm it exists in the project or install scope is allowed;
- confirm the version;
- confirm the symbol/API exists;
- match existing import style;
- avoid code copied from an incompatible major version.

If you cannot verify, say so or use a known local pattern.

## 6.13 Avoid generic naming

Weak names:

- `processData`;
- `handleData`;
- `doThing`;
- `manager`;
- `helper`;
- `utils`;
- `item`;
- `result`;
- `temp`;
- `data` everywhere.

Use names that encode domain intent:

- `reconcileInvoiceLines`;
- `parseWebhookSignature`;
- `eligibleRefunds`;
- `reservationExpiresAt`.

Short local names are fine when scope makes meaning obvious.

## 6.14 Do not synonym-cycle code concepts

If the domain calls it an `Order`, do not alternate between:

- order;
- purchase;
- transaction;
- request

unless they are genuinely different concepts.

Stable naming is part of architecture.

## 6.15 Avoid duplicated near-identical helpers

AI agents often solve the local prompt without noticing the same behavior already exists.

Search first.

If two helpers differ slightly, determine whether:

- the difference is meaningful;
- one can call the other cleanly;
- a shared abstraction would clarify or obscure intent.

Do not deduplicate mechanically. Some duplication is cheaper than a bad abstraction.

## 6.16 Avoid premature abstraction

Do not create:

- factories with one implementation;
- strategies with one strategy;
- generic repositories over a simple query;
- wrappers that only forward arguments;
- generic event buses for two callbacks;
- configuration systems for one constant;
- plugin systems for hypothetical future plugins.

Abstract after you understand the variation.

## 6.17 Avoid oversized functions created by "one-shot generation"

AI can produce a 200-line function that handles:

- validation;
- fetching;
- transformation;
- persistence;
- analytics;
- UI messaging;
- error translation.

Split when there are real conceptual boundaries.

Do not split into dozens of tiny one-use functions merely to lower line count.

## 6.18 Avoid deep nesting when guard clauses clarify behavior

Prefer explicit early exits for invalid/precondition states when they reduce nesting.

But do not turn every function into a wall of disconnected returns.

Readability is the goal, not a specific control-flow style.

## 6.19 Avoid TODO stubs presented as implementation

Do not leave:

```ts
// TODO: implement
return null;
```

inside a path the task claims to complete.

If something is intentionally deferred:

- make the limitation explicit;
- keep it out of the active path when possible;
- create a tracked TODO only if the project uses that practice.

## 6.20 Do not add "safety" code with no threat model

Examples:

- random retries;
- arbitrary timeouts;
- blanket sanitization;
- excessive try/catch;
- broad permission checks;
- duplicate validation at every layer;
- mysterious rate limits.

Security and resilience features should respond to a real failure mode.

Random defensive code can create new bugs and false confidence.

## 6.21 Validate at system boundaries

AI-generated code commonly trusts data because its own types look correct.

Validate where data crosses a trust boundary:

- HTTP request;
- webhook;
- environment variable;
- database payload with loose schema;
- file;
- user input;
- third-party response;
- queue message.

Inside a well-typed trusted boundary, avoid redundant validation that adds noise without safety.

## 6.22 Keep error semantics distinct

Do not collapse:

- not found;
- forbidden;
- unauthenticated;
- conflict;
- invalid input;
- dependency failure;
- timeout;
- internal error

into the same `null`, `{}`, `[]`, or `false`.

Preserve enough information for the caller to make the correct decision.

## 6.23 Tests must test behavior, not implementation theater

Avoid tests that:

- only assert mocks were called;
- mirror the implementation line by line;
- snapshot huge unstable objects;
- assert obvious language/framework behavior;
- pass while the important user outcome is broken.

Prefer tests around:

- public behavior;
- boundaries;
- known regression;
- meaningful edge cases;
- failure semantics.

Do not generate dozens of low-value tests to make coverage look impressive.

## 6.24 Do not mock everything

If every dependency is mocked, the test may only prove the mocks agree with the code.

Use the project's testing strategy.

Favor realistic integration where it provides more confidence for reasonable cost.

## 6.25 Avoid test-data slop

Names like `foo`, `bar`, `test`, `123`, random UUIDs, and unrealistic objects can hide domain mistakes.

Use representative fixtures when domain constraints matter.

Do not overbuild fixture factories for simple tests.

## 6.26 Avoid documentation comments that rot faster than code

Bad:

```ts
// buildFoo will call renderBar with includeHeader false later
```

This cross-reference becomes stale when control flow changes.

Encode relationships in:

- function boundaries;
- types;
- names;
- tests;
- explicit data structures.

Use comments for stable rationale, not a narrated map of current implementation.

## 6.27 Dependency restraint

Before adding a package, ask:

- Is equivalent functionality already installed?
- Can the platform/library do this directly?
- Is the dependency maintained?
- What runtime/bundle/security cost does it add?
- Is the task large enough to justify it?

Do not add a package to save five lines of clear code.

Do not reimplement a complex, security-sensitive standard just to avoid a dependency.

## 6.28 Configuration restraint

Do not expose every internal constant as config.

Configuration is an API and a maintenance burden.

Only expose choices users/operators genuinely need to change.

## 6.29 Security anti-slop

Never assume generated code is safe because it looks standard.

Check relevant risks, including:

- injection;
- unsafe shell execution;
- unsafe HTML insertion;
- path traversal;
- authentication/authorization confusion;
- hardcoded secrets;
- insecure random generation;
- unvalidated redirects;
- SSRF;
- insecure deserialization;
- missing CSRF protections where applicable;
- secret leakage in logs;
- dependency vulnerabilities.

Do not claim a security audit unless you actually performed one within a defined scope.

## 6.30 Code quick check

Before delivery, ask:

- Did I inspect existing patterns first?
- Is the diff larger than the problem?
- Did I add a dependency unnecessarily?
- Did I invent an API/import?
- Did I add narrative/trivial comments?
- Did I leave debug logs?
- Did I swallow errors?
- Did I add a hidden fallback not in the contract?
- Did I use `any` or unsafe casts to silence the type system?
- Did I create generic helpers/names?
- Did I duplicate existing logic?
- Did I abstract hypothetical future variation?
- Did I leave dead code or TODO stubs?
- Are important failure states distinguishable?
- Do tests verify behavior?
- Did I run the relevant tests/lints/typechecks?
- Did I inspect the final diff?

---

# 7. Architecture anti-slop rules

## 7.1 Existing architecture beats fashionable architecture

Do not introduce a new architecture because it is currently popular.

Match the repository unless the task explicitly requires architectural change.

## 7.2 No speculative layers

Each layer should solve a present problem.

Bad default stack for a simple feature:

`Controller → Service → UseCase → Repository → Adapter → Client → Mapper → DTO`

A layered architecture can be correct in a large system. It is slop when generated ceremonially without real boundaries.

## 7.3 Avoid wrapper chains

If a wrapper:

- preserves the same name;
- forwards the same parameters;
- returns the same type;
- adds no invariant, policy, caching, validation, translation, or isolation;

remove it.

## 7.4 Prefer explicit domain boundaries over generic "clean" abstractions

A domain-specific interface can be better than a generic abstraction that hides what the system actually does.

## 7.5 Do not "future-proof" against imaginary futures

Future-proof against known variability, not vague possibility.

Ask:

> What concrete future change does this abstraction make cheaper?

If you cannot answer, keep the design simpler.

---

# 8. Documentation and README anti-slop rules

Documentation should reduce uncertainty, not increase word count.

## 8.1 Explain decisions, not obvious syntax

Useful documentation answers:

- Why does this exist?
- When should I use it?
- What assumptions does it make?
- What can fail?
- What are the invariants?
- What is intentionally unsupported?
- How do I verify it works?
- What tradeoff did we choose?

Weak documentation repeats function names and headings.

## 8.2 Avoid grandiose README intros

Skip:

> Welcome to X, a powerful, cutting-edge, comprehensive solution designed to revolutionize...

Start with what the project does.

## 8.3 Use commands that actually work

Do not fabricate setup steps.

When possible:

- derive commands from `package.json`, Makefile, task runner, CI, or existing docs;
- state prerequisites;
- distinguish dev/test/build/prod commands.

## 8.4 Avoid generated badges and claims unless real

Do not add:

- fake coverage;
- fake build status;
- fake download counts;
- fake compatibility;
- fake performance claims.

## 8.5 Do not document hypothetical features as present

Use clear labels such as:

- planned;
- not implemented;
- experimental;
- deprecated;
- optional;
- placeholder.

---

# 9. Product/UX anti-slop rules

## 9.1 Do not generate features to fill empty space

A dashboard does not need:

- activity feed;
- AI insights;
- notifications;
- recommendations;
- recent items;
- usage chart;
- quick actions

unless the product benefits from them.

## 9.2 Avoid fake dashboards

A dashboard should answer a user's recurring questions or support actions.

Do not create random KPI cards because dashboards "normally have metrics."

## 9.3 Do not add AI features by reflex

Do not add:

- chat assistant;
- magic sparkle button;
- "AI insights";
- auto-summary;
- recommendations

unless the workflow has a real use case and the user requested or benefits from it.

## 9.4 Design the boring states

Quality is often visible in:

- loading;
- empty;
- validation;
- permission denied;
- partial data;
- offline;
- error;
- retry;
- destructive confirmation;
- success feedback.

Do not spend all effort on the hero state.

## 9.5 Avoid fake personalization

Do not display:

> Good morning, Alex!

unless the product actually knows and needs the user's name/time.

Personalization that communicates no useful information is decoration.

---

# 10. AI-agent behavior anti-slop rules

These rules govern how the AI itself should work.

## 10.1 Do not narrate every action

Avoid constant meta-commentary:

- "Now I'll..."
- "Next, let's..."
- "Great, we've..."
- "Perfect!"
- "Let's dive into..."
- "I'll walk you through..."

Use progress updates only when they help the user understand meaningful progress, uncertainty, decisions, or blockers.

## 10.2 Do not restate the prompt

Start work.

Only summarize requirements when the task is complex enough that confirming the interpreted scope is useful.

## 10.3 Do not over-explain obvious changes

For a small fix, a small summary is enough.

Do not attach an essay to a three-line change unless the reasoning is important.

## 10.4 Do not claim emotions, taste, or consensus as evidence

Avoid:

- "Users will love this";
- "This feels premium";
- "This is objectively cleaner";
- "Everyone prefers...";
- "This is the best practice"

without grounding.

Explain the concrete tradeoff.

## 10.5 Do not hide uncertainty behind confident prose

If you did not verify something, do not make the sentence smoother to hide that fact.

Use precise uncertainty:

- "I did not run the integration test."
- "This assumes the API accepts X."
- "I found no existing helper for Y."
- "The design uses placeholder data."

## 10.6 Do not optimize for praise

Do not tell the user the project is:

- excellent;
- impressive;
- brilliant;
- production-ready;
- polished

as conversational filler.

Evaluate concrete qualities when relevant.

## 10.7 Do not produce unnecessary alternatives

Do not generate five options when one good answer satisfies the task.

Offer alternatives when there are meaningful tradeoffs.

---

# 11. The "Default Stack" audit

When a project feels generic, inspect whether several of these appear together.

## Writing defaults

- throat-clearing introduction;
- vague business adjectives;
- `not X, but Y`;
- faux insight;
- rule of three;
- dramatic fragments;
- synonym cycling;
- em-dash-heavy prose;
- generic takeaway;
- fake-profound closing.

## Web design defaults

- purple/blue glow;
- Inter/Geist/Space Grotesk without rationale;
- centered hero;
- pill badge;
- gradient/italic keyword;
- two pill CTAs;
- rounded cards everywhere;
- bento feature grid;
- three steps;
- fake testimonials;
- three pricing tiers;
- FAQ;
- giant final CTA;
- fade-up on scroll;
- generic icon set;
- untouched shadcn/Tailwind look.

## Code defaults

- `utils`/`helpers`;
- narrative JSDoc;
- trivial comments;
- `try/catch` everywhere;
- silent `[]` / `{}` / `null` fallback;
- `as any`;
- generic names;
- duplicated helper;
- TODO stub;
- debug logs;
- dead imports/code;
- oversized one-shot functions;
- speculative abstraction;
- invented dependency/API.

**Important:** a hit is not automatically a defect. A cluster of unjustified hits is the warning.

---

# 12. Better-pattern replacements

Use these transformations as a review tool.

| Slop tendency | Better question |
|---|---|
| Generic claim | What exact mechanism, fact, or outcome can I name? |
| Fancy adjective | Can the evidence carry the emphasis? |
| "Not X, but Y" | Can I state Y directly? |
| Three-card grid | Are these really three peer objects? |
| Purple gradient | What palette belongs to this subject? |
| Fake testimonial | What real proof exists? |
| Three pricing tiers | What pricing model actually exists? |
| Fade-up everywhere | What interaction needs motion? |
| Narrative comment | What non-obvious reason does the reader need? |
| Silent fallback | What should the caller know about failure? |
| `as any` | What boundary/type is actually uncertain? |
| Generic helper | What domain action does this perform? |
| New abstraction | What current duplication/variation justifies it? |
| New dependency | What cost does it save, and what cost does it add? |
| Big rewrite | What is the smallest coherent change? |
| Huge answer | What does the user actually need to act? |

---

# 13. Scoring rubric

Use this only as a review aid. Do not game the score.

Score each dimension from 1 to 5.

## 13.1 Universal

| Dimension | 1 | 3 | 5 |
|---|---|---|---|
| Specificity | Generic/interchangeable | Some project detail | Strongly grounded in project |
| Intentionality | Defaults stacked | Mixed | Choices clearly justified |
| Density | Much filler/noise | Mostly useful | Nearly everything earns its place |
| Honesty | Assumptions presented as facts | Some caveats | Facts, assumptions, placeholders clear |
| Reviewability | Hard to verify | Reasonable | Small, legible, easy to inspect |
| Maintainability | Creates hidden cost | Acceptable | Simple and locally consistent |

Target: **24/30 or higher**, with no score of 1.

## 13.2 Writing

Score 1–5:

- Directness
- Specificity
- Voice preservation
- Rhythm
- Trust
- Information density

Target: **24/30 or higher**.

## 13.3 UI/design

Score 1–5:

- Context specificity
- Visual coherence
- Information hierarchy
- Interaction clarity
- Accessibility/responsiveness
- Restraint

Target: **24/30 or higher**.

## 13.4 Code

Score 1–5:

- Correctness confidence
- Scope discipline
- Error honesty
- Naming/clarity
- Architecture fit
- Verification

Target: **24/30 or higher**.

A high score never overrides a failing test, security defect, accessibility problem, or user requirement.

---

# 14. Final pre-delivery gate

Before delivering non-trivial work, run this gate.

## Facts

- [ ] No invented facts, metrics, users, quotes, citations, APIs, or test results.
- [ ] Material assumptions are explicit.
- [ ] Placeholders are labeled.

## Scope

- [ ] The work solves the requested task.
- [ ] No unrelated rewrite/migration/redesign was introduced.
- [ ] New files/dependencies/abstractions are justified.

## Writing

- [ ] No generic throat-clearing.
- [ ] No repeated rhetorical templates.
- [ ] No vague importance puffery.
- [ ] No fake-profound ending.
- [ ] Terminology is stable.
- [ ] Formatting matches the information.
- [ ] User voice is preserved where relevant.

## UI

- [ ] Visual choices come from the brief/project.
- [ ] No cluster of generic AI-design defaults without rationale.
- [ ] Real/representative content was used.
- [ ] Social proof is real or clearly placeholder.
- [ ] Loading/empty/error states were considered.
- [ ] Mobile and keyboard behavior were checked where applicable.
- [ ] Motion has a function and reduced-motion is respected.

## Code

- [ ] Existing patterns were inspected.
- [ ] Diff is proportional to the task.
- [ ] No narrative/trivial comments.
- [ ] No swallowed errors or undocumented hidden fallbacks.
- [ ] No unsafe casts/lint suppression without justification.
- [ ] No debug residue, dead code, or unfinished active-path TODO.
- [ ] Naming uses domain language.
- [ ] Tests/checks appropriate to the change were run when possible.
- [ ] Final diff/output was inspected.

## Delivery

- [ ] Claims about completion match what was actually verified.
- [ ] The summary is proportional to the work.
- [ ] Remaining limitations are stated plainly.

---

# 15. Rules that are deliberately NOT absolute

Do **not** turn this document into a mechanical style linter.

The following are allowed when justified:

- passive voice;
- adverbs;
- em dashes;
- rule-of-three structures;
- cards;
- bento grids;
- gradients;
- purple;
- Inter;
- shadcn/ui;
- Tailwind;
- centered layouts;
- rounded corners;
- glassmorphism;
- animations;
- comments;
- abstractions;
- helper files;
- fallbacks;
- retries;
- TODOs;
- large functions;
- dependencies.

The issue is **default use without context, repeated use without purpose, or use that hides a quality problem**.

The cure for AI slop is not a new list of aesthetic taboos.

The cure is deliberate work.

---

# 16. Research-backed operating principles

The following principles summarize the strongest common ground across the references used to create this guide:

1. **Judge observable quality patterns, not presumed authorship.** "Looks AI-generated" is too subjective to be a useful engineering or writing diagnosis by itself.
2. **Preserve human/project-specific signal.** Over-editing can erase vocabulary, cadence, domain detail, and design identity.
3. **Generic defaults become slop in clusters.** A popular ... (4 KB restante(s))
# Loop-engineering prompt

Use the following prompt to run the complete autonomous coding backlog:

> Continue implementing this repository. Read `AGENTS.md`,
> `docs/project-status.md`, `docs/agent-tasks.md`, `docs/human-tasks.md`, and
> `docs/content-approvals.md`.
> Repeatedly select the first ready, unchecked agent task in backlog order.
> Implement that task, run all of its verification, update its checkbox and the
> project status with concrete evidence, and make one scoped local commit. Then
> immediately continue with the next ready task without waiting for another user
> prompt. Do not invent missing personal facts and do not perform human-owned
> tasks. If a task is blocked, record the exact blocker and continue with any
> later task that is genuinely independent. Stop only when every agent task is
> complete or no unchecked agent task can proceed because all remaining work is
> blocked. At that point, report completed tasks, verification results, commits,
> and exact human task IDs still required. Do not push, change repository
> settings, or deploy unless I explicitly request it.

## Expected loop behavior

- One invocation runs as many ready `A-*` tasks as possible.
- Each task remains a separate implementation/verification cycle and local commit.
- After committing a task, re-read the status and continue automatically.
- A failed verification remains unchecked and is recorded in project status.
- A blocked task does not end the run while a later task is genuinely independent.
- A task is complete only when all of its success criteria are true.
- Human tasks are never checked by an agent without evidence supplied or
  confirmed by the human.

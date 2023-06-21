import { client, github, slack } from "@/trigger";
import { Github } from "@trigger.dev/github";
import { events } from "@trigger.dev/github";
import { Job } from "@trigger.dev/sdk";

const githubApiKey = new Github({
  id: "github-api-key",
  token: process.env.GITHUB_API_KEY!,
});

new Job(client, {
  id: "github-integration-on-issue",
  name: "GitHub Integration - On Issue",
  version: "0.1.0",
  trigger: githubApiKey.triggers.repo({
    event: events.onIssue,
    repo: "triggerdotdev/empty",
  }),
  run: async (payload, io, ctx) => {
    await io.logger.info("This is a simple log info message");
    return { payload, ctx };
  },
});

new Job(client, {
  id: "github-integration-on-issue-opened",
  name: "GitHub Integration - On Issue Opened",
  version: "0.1.0",
  trigger: githubApiKey.triggers.repo({
    event: events.onIssueOpened,
    repo: "triggerdotdev/empty",
  }),
  run: async (payload, io, ctx) => {
    await io.logger.info("This is a simple log info message");
    return { payload, ctx };
  },
});

new Job(client, {
  id: "github-integration-on-issue-assigned",
  name: "GitHub Integration - On Issue assigned",
  version: "0.1.0",
  trigger: githubApiKey.triggers.repo({
    event: events.onIssueAssigned,
    repo: "triggerdotdev/empty",
  }),
  run: async (payload, io, ctx) => {
    await io.logger.info("This is a simple log info message");
    return { payload, ctx };
  },
});

new Job(client, {
  id: "github-integration-on-issue-commented",
  name: "GitHub Integration - On Issue commented",
  version: "0.1.0",
  trigger: githubApiKey.triggers.repo({
    event: events.onIssueComment,
    repo: "triggerdotdev/empty",
  }),
  run: async (payload, io, ctx) => {
    await io.logger.info("This is a simple log info message");
    return { payload, ctx };
  },
});
import type { UserConfig } from "@commitlint/types";
import { RuleConfigSeverity } from "@commitlint/types";

const Configuration: UserConfig = {
  extends: "@commitlint/config-conventional",
  rules: {
    // TYPE
    "type-enum": [
      RuleConfigSeverity.Error,
      "always",
      ["feat", "fix", "refactor"],
    ],
    // SCOPE
    "scope-empty": [RuleConfigSeverity.Error, "never"],
    "scope-min-length": [RuleConfigSeverity.Error, "always", 2],
    // SUBJECT
    "subject-min-length": [RuleConfigSeverity.Error, "always", 5],
    "subject-max-length": [RuleConfigSeverity.Error, "always", 100],
    // BODY
    "body-empty": [RuleConfigSeverity.Warning, "never"],
  },
};

module.exports = Configuration;

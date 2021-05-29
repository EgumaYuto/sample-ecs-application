import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const argv = yargs(hideBin(process.argv))
  .option("cmd", {
    alias: "c",
    type: "string",
    description:
      "(Required) terraform command (init, plan, apply and so on...)",
  })
  .option("env", {
    alias: "e",
    type: "string",
    description: "(Required) Execute environment",
  })
  .option("overview", {
    alias: "o",
    type: "string",
    description: "(Required) Overview json file path.",
  }).argv;

export const getCmd = (): string => {
  const cmd = argv.cmd;
  if (!cmd) {
    throw new Error(`Terraform command is undefined. cmd : ${cmd}`);
  }
  return cmd;
};

export const getEnv = (): string => {
  const env = argv.env;
  if (!env) {
    throw new Error(`Execute environment is undefined. env : ${env}`);
  }
  return env;
};

export const getOverviewJsonFilePath = (): string => {
  const overview = argv.overview;
  if (!overview) {
    throw new Error(
      `Overview json file path is undefined. overview : ${overview}`
    );
  }
  return overview;
};

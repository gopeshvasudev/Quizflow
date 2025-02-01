import { summaries } from "./constants";

export function getSummary(length) {
  let summary = "";

  if (length <= 2) {
    summary = summaries[0];
  } else if (length <= 4) {
    summary = summaries[1];
  } else if (length <= 6) {
    summary = summaries[2];
  } else if (length <= 8) {
    summary = summaries[3];
  } else if (length === 9) {
    summary = summaries[4];
  } else {
    summary = summaries[5];
  }

  return summary;
}

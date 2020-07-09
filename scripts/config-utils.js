function nestedMerge(baseCfg, additionalCfg) {
  if (baseCfg === null || baseCfg === undefined) {
    return additionalCfg;
  } else if (typeof baseCfg !== typeof additionalCfg) {
    throw new Error(
      `cannot merge ${additionalCfg} into ${baseCfg} due to type mismatch`
    );
  } else if (Array.isArray(baseCfg)) {
    return [...baseCfg, ...additionalCfg];
  } else if (typeof baseCfg === "object") {
    for (const [k, v] of Object.entries(additionalCfg)) {
      baseCfg[k] = nestedMerge(baseCfg[k], additionalCfg[k]);
    }
    return baseCfg;
  } else {
    return additionalCfg;
  }
}

export function configMerger(additionalCfg) {
  return (baseCfg) => nestedMerge(baseCfg, additionalCfg);
}

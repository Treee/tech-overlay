// Preserve the old blacksmith summary order; availability and pictures come from upstream.
const blacksmithChains = [[67,68,75],[74,76,77],[81,82,80],[199,200,201],[211,212,219],[437]];
export function upgradeTiles(tree, group) {
  if (group !== 103) return tree.units_techs.filter(n => n.building_id === group || (group === 104 && n.building_id === 1806)).map(node => ({ node, tiers: [node.node_status !== 'NotAvailable'] }));
  return blacksmithChains.flatMap(ids => {
    const nodes = ids.map(id => tree.units_techs.find(n => n.use_type === 'Tech' && n.node_id === id));
    const tiers = nodes.map(n => !!n && n.node_status !== 'NotAvailable');
    const node = nodes.filter((n, i) => tiers[i]).at(-1) || nodes.find(Boolean);
    return node ? [{ node, tiers }] : [];
  });
}

export const summaryRows = [
  { label: 'Military', chains: [[67,68,75],[74,76,77],[81,82,80],[199,200,201],[211,212,219],[437]] },
  { label: 'Economy & support', chains: [[202,203,221],[14,13,12],[93],[377],[435],[39]] },
  { label: 'Monastery', chains: [[316],[319],[441],[439],[231],[252],[45],[233],[230],[438]] }
];
export function summaryTiles(tree, catalog, chains) {
  return chains.map(ids => {
    const nodes = ids.map(id => tree.units_techs.find(n => n.use_type === 'Tech' && n.node_id === id));
    const tiers = nodes.map(n => !!n && n.node_status !== 'NotAvailable');
    const index = tiers.lastIndexOf(true);
    const node = index >= 0 ? nodes[index] : catalog.get(ids[0]);
    return { node, tiers };
  });
}
export function presentation(state) {
  return { theme: state.theme || 'compact', layout: state.layout === 'auto' || !state.layout ? (state.civs.length <= 1 ? 'single' : state.civs.length === 2 ? 'duel' : 'teams') : state.layout, detail: state.detail || 'summary' };
}

// Every display mode honors the same building selections. Keep compact tier
// summaries where defined and show the actual tree icons for other buildings.
export function selectedRows(tree, catalog, selected, labels, compactSummary) {
  return selected.map(group => {
    const chains = group === 9000 ? economyChains(tree) : group === 103 ? summaryRows[0].chains : group === 104 ? summaryRows[2].chains : null;
    return {
      label: labels.get(group),
      tiles: (compactSummary || group === 9000) && chains ? summaryTiles(tree, catalog, chains) : upgradeTiles(tree, group)
    };
  }).filter(row => row.tiles.length > 0);
}

// Synthetic group ID, distinct from upstream building IDs.
export const ECONOMY = 9000;
export function economyChains(tree) {
  const farming = tree.units_techs.some(n => n.use_type === 'Tech' && n.node_id === 1012 && n.node_status !== 'NotAvailable')
    ? [1012,1013,1014] : [14,13,12];
  return [farming,[202,203,221],[55,182],[278,279],[23,17],[48],[15]];
}
export function uniqueBuildings(tree) {
  const seen = new Set();
  return tree.buildings.filter(node => {
    if (!['UniqueBuilding','RegionalBuilding'].includes(node.node_type) || node.node_status === 'NotAvailable' || seen.has(node.node_id)) return false;
    seen.add(node.node_id); return true;
  });
}

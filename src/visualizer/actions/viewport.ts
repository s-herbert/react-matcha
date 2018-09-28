export const SELECT_NODE = 'SELECT_NODE';
export function selectNode(id) {
  return {
    type: SELECT_NODE,
    payload: id,
  };
}

export const SELECT_EDGE = 'SELECT_EDGE';
export function selectEdge(id) {
  return {
    type: SELECT_EDGE,
    payload: id,
  };
}

export const SELECT_PREVIOUS_TYPE = 'SELECT_PREVIOUS_TYPE';
export function selectPreviousType() {
  return {
    type: SELECT_PREVIOUS_TYPE,
  };
}

export const CLEAR_SELECTION = 'CLEAR_SELECTION';
export function clearSelection() {
  return {
    type: CLEAR_SELECTION,
  };
}

export const FOCUS_ELEMENT = 'FOCUS_ELEMENT';
export function focusElement(id) {
  return {
    type: FOCUS_ELEMENT,
    payload: id,
  };
}

export const FOCUS_ELEMENT_DONE = 'FOCUS_ELEMENT_DONE';
export function focusElementDone(id) {
  return {
    type: FOCUS_ELEMENT_DONE,
    payload: id,
  };
}

export const QUERY_MODE_ENABLED = 'QUERY_MODE_ENABLED';
export function queryModeEnabled(boolean) {
  return {
    type: QUERY_MODE_ENABLED,
    payload: boolean,
  };
}

export const STORE_NODE = 'STORE_NODE';
export function storeNode(id) {
  return {
    type: STORE_NODE,
    payload: id,
  };
}

export const STORE_EDGES = 'STORE_EDGES';
export function storeEdges(id) {
  return {
    type: STORE_EDGES,
    payload: id,
  };
}




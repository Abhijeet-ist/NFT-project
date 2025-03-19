import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({ 
    modal: 'scale'
});

export { setGlobalState, useGlobalState, getGlobalState };

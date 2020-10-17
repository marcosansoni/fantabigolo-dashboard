const byIdSelectorFactory = (entity) => (state) => state[entity].byId;

export default byIdSelectorFactory;

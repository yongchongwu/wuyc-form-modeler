const not_externals = [
    'vue',
    'Vue',
    'element-ui',
    'elementUI',
    '@form-create/element-ui'
];

const isExternal = (not_externals, id) => {
    for (const external of not_externals) {
        if (
            typeof external === 'string' &&
      (id === external || id.includes(`/node_modules/${external}/`))
        ) {
            return true;
        }
    }
};

export {
    not_externals,
    isExternal
};

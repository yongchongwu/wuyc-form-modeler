function getBanner(banner, pkg) {
    if (!banner || typeof banner === 'string') {
        return banner || '';
    }

    banner = {...pkg, ...(banner === true ? {} : banner)};

    const author =
    typeof banner.author === 'string'
        ? banner.author
        : typeof banner.author === 'object'
            ? stringifyAuthor(banner.author)
            : '';

    const license = banner.license || '';

    return (
        '/*!\n' +
    ' * 可视化表单设计器\n' +
    ` * ${banner.name} v${banner.version}\n` +
    ` * (c) ${author || ''}\n` +
    (license && ` * Released under the ${license} License.\n`) +
    ' */'
    );
}


module.exports = getBanner;

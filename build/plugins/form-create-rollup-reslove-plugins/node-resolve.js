import {nodeResolve} from '@rollup/plugin-node-resolve';
import {not_externals, isExternal} from '../../utils/isExternal';

export default (options) => {
    const plugin = nodeResolve({
        extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
        preferBuiltins: true,
        jsnext: true,
        module: true,
    });

    return {
        name: 'form-create-node-resolve',
        async resolveId(importee, importer) {
            const id = await plugin.resolveId(
                importee,
                importer || 'src/__no_importer__.js'
            );
            if (id && typeof id.id === 'string') {
                if (isExternal(not_externals, id.id)) {
                    return false;
                }
            }
            return id;
        }
    };
};

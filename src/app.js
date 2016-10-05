import {h,create,diff,merge} from 'virtual-dom';
import 'material-design-lite/src/button/_button.scss';
import 'material-design-lite/src/data-table/_data-table.scss';

const btn =  (text) => h('button', {className: 'mdl-button mdl-js-button mdl-button--raised'}, text);

const tbl = (headers, data) => h('table', {className: 'mdl-data-table'}, [
    h('thead', h('tr', headers.map(hdr => h('th', {class: 'mdl-data-table__cell--non-numeric'}, hdr)))),
    h('tbody', data.map(l => h('tr', l.map(c => h('td', {class: 'mdl-data-table__cell--non-numeric'}, c)))))
]);



const app = () => h('div', [
    btn("Add"),
    h('hr'),
    tbl(['aaa', 'bbb'], [['aaaa', 'bbbb'], ['aaaa', 'bbbb'], ['aaaa', 'bbbb'],['aaaa', 'bbbb'] ])
]);

const DOM = create(app());
document.body.appendChild(DOM);






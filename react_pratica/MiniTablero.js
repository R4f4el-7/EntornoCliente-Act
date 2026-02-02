export default function MiniTablero() {
    const colors = ['white', 'black', 'white', 'black'];

    return React.createElement(
        'div',
        { style: { display: 'grid', gridTemplateColumns: '50px 50px'} },
        colors.map((color, i) => React.createElement('div', { key: i, style: { width: 50, height: 50, backgroundColor: color} }))
    )
}
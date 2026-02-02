export default function Letras() {

    const files = ['A','B','C','D','E','F','G','H'];

    return React.createElement(
        'div',
        {
            style: {
                display: 'grid',
                gridTemplateColumns: '20px repeat(8, 50px)',
                textAlign: 'center'
            }
        },
        React.createElement('div', null),
        files.map(letra =>
            React.createElement('div', { key: letra }, letra)
        )
    );
}

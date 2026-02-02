export default function Casilla({ esOscura, simbolo, alClick }) {
    return React.createElement(
        'div',
        {
            className: `square ${esOscura ? 'dark' : 'light'}`,
            onClick: alClick
        },
        simbolo
    );
}

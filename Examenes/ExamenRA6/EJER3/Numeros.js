export default function Numeros({ numero }) {
    return React.createElement(
        'div',
        {
            style: {
                lineHeight: '50px',
                textAlign: 'center'
            }
        },
        numero
    );
}

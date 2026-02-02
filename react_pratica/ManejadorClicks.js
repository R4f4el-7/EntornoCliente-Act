export default function HandleClick() {
    const [color, setColor] = React.useState('red');

    return React.createElement(
        'div',
        {
            style: { width: 100, height: 100, backgroundColor: color },
            onClick: () => setColor(color === 'red' ? 'green' : 'red')
        }
    );
}
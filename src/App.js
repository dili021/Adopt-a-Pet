const Pet = ({ name, animal, breed }) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, name),
    React.createElement('h2', {}, animal),
    React.createElement('h2', {}, breed),
  ]);
};

const App = () => {
  return React.createElement('div', { id: 'test-id' }, [
    React.createElement('h1', {}, 'Adopt Me!'),
    React.createElement(Pet, { name: 'bobi', animal: 'ker', breed: 'dzukela' }),
    React.createElement(Pet, { name: 'leo', animal: 'ker', breed: 'pudla' }),
    React.createElement(Pet, { name: 'kurac', animal: 'ker', breed: 'kurac' }),
  ]);
};

ReactDOM.render(React.createElement(App), document.querySelector('#root'));

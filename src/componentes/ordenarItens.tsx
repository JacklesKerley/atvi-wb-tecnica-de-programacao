import React, { Component, ChangeEvent } from 'react';

interface SelectComponentProps {
  // Defina quaisquer props adicionais necessárias aqui
}

interface SelectComponentState {
  selectedOption: string;
}

class SelectComponent extends Component<SelectComponentProps, SelectComponentState> {
  constructor(props: SelectComponentProps) {
    super(props);
    this.state = {
      selectedOption: '1'
    };
  }

  handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedOption: event.target.value });
  };

  render() {
    const { selectedOption } = this.state;

    return (
      <select value={selectedOption} onChange={this.handleSelectChange}>
        <option value="1">Selecione</option>
        <option value="2">Maiores Compradores</option>
        <option value="3">Menores Compradores</option>
      </select>
    );
  }
}

export default SelectComponent;

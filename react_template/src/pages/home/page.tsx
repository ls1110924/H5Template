import React from 'react'
import './style.css'

export interface HomeProps {
  name: string

  modifyName: (name: string) => void
}

export class HomePage extends React.Component<HomeProps> {

  constructor(props: HomeProps) {
    super(props)
  }

  onModifyBtnClick = () => {
    const { modifyName } = this.props
    modifyName && modifyName('HelloWorld')
  }

  render() {
    const { name } = this.props
    return (
      <div className="app">
        <div className="app-name">{name}</div>
        <div className="app-modify-name"
             onClick={this.onModifyBtnClick}>
          修改名称
        </div>
      </div>
    );
  }
}
import React, { Component} from 'react';
import Flag from './flag';
import { setLanguageStorage, getLanguageStorage } from '../utils';


class ComboLanguages extends Component {

  constructor(props) {
    super(props);
    this.state = {data: []};
    this.loadLabels = this.loadLabels.bind(this);
  }

  componentDidMount(){
    // this.comboLanguages().then((d) => this.setState({ data: d }));
  }

  loadLabels(e) {
    let lang = e.target.name.toUpperCase()
    setLanguageStorage(lang)
    this.props.loadLabels()
  }

  comboLanguages() {
    const data = [
      {id: "en", src: "./img/lang/flag_eng"},
      {id: "ru", src: "./img/lang/flag_jpn"},
      {id: "ua", src: "./img/lang/flag_fra"}
    ];
    return data.map( (d, i) => {
      return (
        <Flag key={i} name={d.cLangID} image={d.src}
              onClick={this.loadLabels} ></Flag>
      )
    })
  }

  render() {

    return (
      <div className="language-combo">
        {this.state.data}
      </div>
    )
  }
}

export default ComboLanguages;
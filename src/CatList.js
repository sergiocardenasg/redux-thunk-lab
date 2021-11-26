// write your CatList component here
import React, { PureComponent } from 'react'

export default class CatList extends PureComponent {
    listCats = () => {
        return this.props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.id} />)
    }

    render() {
        return (
            <div>
                {this.listCats()}
            </div>
        )
    }
}

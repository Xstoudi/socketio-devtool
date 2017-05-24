import React from 'react'
import { connect } from 'react-redux'

import Listener from './Listener.jsx'
import store from '../../store.jsx'
import { setLicenses } from '../../actions/licenses-actions.jsx'

class LicenseContent extends React.Component {

    componentDidMount() {
        store.dispatch(setLicenses(require('../../../../dependencies.json')))
    }

    render() {
        return (
            <div className="license-content">
                <h2>License</h2>
                <div className="license">
                    <p>Copyright 2017 Xavier "Xstoudi" Stouder</p>
                    <p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p>
                    <p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p>
                    <p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>
                </div>

                <h2>Third-party licenses</h2>
                <div className="licenses">
                    <ul className="dependency-license">
                        {
                            Object.keys(this.props.licenses).map(licenseKey => {
                                const license = this.props.licenses[licenseKey]

                                const licenseName = license.repository !== void 0 ? <a href={license.repository} target="_blank">{licenseKey}</a> : licenseKey
                                
                                let author = ''
                                if(license.publisher !== void 0){
                                    author += license.publisher
                                    if(license.url !== void 0)
                                        author = <a href={license.url} target="_blank">{author}</a>
                                }

                                return <li>{licenseName} {author !== void 0 ? 'by' : ''} {author} under {license.licenses} license</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = store => ({licenses: store.licensesState})

export default connect(mapStateToProps)(LicenseContent)

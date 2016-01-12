import React from 'react';
import { Link, IndexLink } from 'react-router';

class Navigation extends React.Component {

    render() {
        return (
            <header>

                <div className="logo col-xs-2 col-sm-4">
                    <h1>
                        <Link to="/">
                            <span className="hide-bf-small">JuLian</span>
                            <span className="hide-bf-medium">JL</span>
                        </Link>
                    </h1>
                </div>

                <nav className="col-xs-10 col-sm-8">
                    <ul className="pull-right">
                        <li>
                            <IndexLink to="/" activeClassName="active">
                                工作流
                            </IndexLink>
                        </li>
                        <li>
                            <Link to="/me" activeClassName="active">
                                关于我
                            </Link>
                        </li>
                        <li>
                            <Link to="/skills" activeClassName="active">
                                炫技能
                            </Link>
                        </li>
                    </ul>
                </nav>

            </header>
        )
    }

}

export default Navigation;
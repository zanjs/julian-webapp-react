import React from 'react';
import { Link } from 'react-router';

class Me extends React.Component {

    render() {
        return (
            <div className="me-container">
                <div className="about-me">
                    <p>
                        职业认证：长年从事搬砖工，资深屌丝，某组织核心成员,
                        我们是一群追求技术的青年，我们乐于专研，勤于分享！
                        兼职网站安全测试工作，相信喜欢安全的人都是热爱生活的人，爱安全的人应该感谢这个时代，
                        应该感谢发达的资讯和媒介让我们可以学习到如此丰富多彩的安全技术；但是同时热爱安全的人往往也会痛恨这 个时代，
                        祖国复杂的大环境，每天耳边眼前某某大黑阔又进去喝茶了，某某大型电商又被拖库了，无时不刻的轰击着我们的耳朵，
                        同时也对我们敲响警钟，禁锢着我 们的行为。我们想为祖国的网络安全做贡献，
                        但是却又被各种各种条条框框乱七八糟的法律法规约束着。是的，爱生活，爱自由，我们对技术的选择却很累很不自 由。
                    </p>
                </div>

                <div className="go-to-work">
                    <Link to="/work">
                        Work
                    </Link>
                </div>
            </div>
        )
    }

}

export default Me;
import React, {Component} from 'react';
import GitHubButton from 'react-github-btn'
import "./style.css";
class Footer extends Component {
    render() {
        return (
            <footer class="page-footer font-small special-color-dark pt-4 ">

                <div className='flex-wrap' style={{textAlign:"center"}}>
                    <div className='m-2'><GitHubButton href="https://github.com/7ayush" data-show-count="true" aria-label="Follow @7ayush on GitHub">Follow @AyushKaushik</GitHubButton></div>
                    &nbsp
                    <GitHubButton href="https://github.com/7ayush/Visualization/fork" data-icon="octicon-repo-forked" data-show-count="true" aria-label="Fork 7ayush/Visualization on GitHub">Fork</GitHubButton>
                    &nbsp
                </div>

                <div class="footer-copyright text-center py-3">© 2022 Copyright:
                    <a href="https://github.com/7ayush" style={{color: "#65b6f0"}}>Ayush Kaushik</a>
                </div>

            </footer>
        );
    }
}

export default Footer;
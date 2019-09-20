import React from 'react'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {setHello} from "../store/actions";

const About = ({hello,setHello}) => {
    return <div>
        <h3>About</h3>
        <Link to="/">home</Link>
        <br/>
        {hello}
        <br/>
        <button type="button" onClick={() => setHello('HELLO')}>
            Hello
        </button>
    </div>
};

const mapStateToProps = state => ({
   hello: state.hello
});

const mapDispatchToProps = {setHello};

export default connect(mapStateToProps,mapDispatchToProps)(About);
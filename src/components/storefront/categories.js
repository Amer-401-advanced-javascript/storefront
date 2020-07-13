import React from "react";
import { connect } from "react-redux";

import { active } from '../../store/categories';

const Categories = (props) => {
  return (
    <>
    <label>Categories: </label>
    <select onChange = { (e)=>props.active(e.target.value)}>
        {console.log(props.activeCat)}
        {props.activeCat.categories.map(value => {
          return  <option key= {value.name} value={value.name}>{value.displayName}</option>
        })
        }
    </select>
    </>
  );
};

const mapStateToProps = (state) => ({
  activeCat: state.categories,
});

const mapDispatchToProps = { active }
// const mapDispatchToProps = ({
//     active: dispatch(active()),
// }) 

export default connect(mapStateToProps, mapDispatchToProps)(Categories);

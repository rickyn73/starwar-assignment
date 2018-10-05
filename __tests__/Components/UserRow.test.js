import UserRow from "../../Components/UserRow";
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

describe("<UserRow />", () => {
    const data = {
        name: "Annabella Anderson",
        role: "PCA",
        url: ""
    }
    it("check if Userrow rendered", () => {
        const wrapper = shallow(<UserRow data={data} />);
        expect(wrapper.find('.user-row-container').length).toBe(1);
    });

    it("test:: userrow should return  null if data is null", () =>{
        const wrapper = shallow(<UserRow data={""} />);
        expect(wrapper.find('.user-row-container').length).toBe(0);
    });

    it("test :: check if name matches", ()=> {
        const wrapper = mount(<UserRow bar="baz" data={data} />);
        let dt = wrapper.prop("data");
        expect(dt.name).toBe("Annabella Anderson");
    })

});
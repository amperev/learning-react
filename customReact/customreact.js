function customrender(reactElement,container)
{
    const domElement =document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children

    for(const prop in reactElement.props){
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.append(domElement)

}


const reactElement = {
    type: 'a',
    props:{
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Clock to Google'
}

const mainContainer=document.querySelector('#root')

customrender(reactElement,mainContainer)
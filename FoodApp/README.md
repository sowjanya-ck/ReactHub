## build food app
       
              * Header
              -logo
              -nav items
                     -about home etc links
              * Body
              -Search
              -RestaurantContainer
                     -RestarantCard
                     -img,
                     - name of restaurant, start rating,cuisine, delivery time
              * Footer
              -Copyright
              -address
              -contact
              -links

### 1. plan the page 
### 2. make the res-card dynamic by props.
       -> props: passing the argument to a function.
       -> props destructuring
       -> config driven UI : based on the different data , UI is designed according to the data given by the COnfig.
            -> ex: carousal is different for different city in food app.
### 3. make the res-card dynamic by json data,  
       -> always use a key, whenever looping the elements. 
          -> index as a key is not acceptable.
---- rafce ->short cut to create a compoenent
### 4. two types of export/import
       * default export/import
         export default Component
         import component from "path";
       
       * named export/import 
         export const component
         import {component} form "path";

### 5. React hooks
       - Normal js utilty functions
              -useState()
       -useEffect()

### 6. virtual DOM concept
       - DIff alogirthm finds out the difference btn old virtual dom and updated virtual dom and then updates the actual dom.
       -virtual dom = it is the representation of the actual dom, its a react object.

### 7. useState()

### 7.2 useEffect() : called after the body compoenent renders.9
        * resolve cors error by adding cors alow origin extension to chrome.

### 7.3 use Shimmer ui
        once the page renders, show some fake card ,instead of not showing anything.

### 8 add login logout button 
       usuing usestate login and logout created by onclick event.
### 8.1 create a search bar
       -create one more use state for filteredrestarant, so that if the user search the partiucular restarant and sarch it again
       , it will consider whole restaraunts and search the data. so bcs of this mainatin one more filteredrataurant and update the setfilertedrestarant after the search.

### 9  useEffct and usestate recap
### 9.1 useEffect 
       -if no dependedncy array then useEffect is called on every rendering.
       -if empty dependecy array present, usefecct is called on initial render(just once);
       -if we put something inside the dependcy array then , useffect is called if the dependcy array changes.
### 9.2 useState 
       -never create a usestate outside of the component body. useState is used to create a local state variable isnide the functional component.
       -dont create a state variable inside the if else condion , and for loop and inside the function though its isndie the body componet.
       -always create a state variable in the top level of the functional component.

### 9.3  React router

### 9.4 navigation
       -   its not good way to use anchor tag like below, because its refreshes the whole page. *
                    <li>< a href="/about"> About us </a></li> 
       - so use link to avoid the refresh.
### 9.5 two types of routing in web appps
       - client side routing
       - Server side routing


### 9.6   pass dynamic data by using column
       -  path: "/restaurants/:resId", here :resId is dynamic
       - using link action and dynamic id , each res card is clickable and goes to resmenu.

## expisode 08 
### 9.7 Class based component
       - class commpojent extends the react componet and it has render method , that return the some piece of jsx.
       -to get the props inside the class component shoud create constructor and inside should write super(props).
       - create a this.state inside the construtor and intiliaze the usestate params.
       - here this.state which holds all the state variable.
       - use this.setState({count: this.state.count +1})
### 9.8 How it is class compoment mounted on the webpage?
       -parent class then childern , then contrsturor , then render is called
       - componetnDidmount will be called once the componet has been completetly mounted.(constructor, render- componetdimount)
       -parent contrustor,parent render,childer contsure,childern render,childer didmount,parent did mount.
       -

### 9.9 react lifecycyel  vip
       - parent contructor
       -parent render
       -      childern....
       if there are multiple child classes then how it will work?
       - parent contructor ,parent render
              firt childe constctur
              first childe render
              (first coumpoent didmout not trigger here now.)
              - second child contructor
              -second chield render
              -first componet didmount
              secoond compoent didmout
              -parent componet dicmlut

       - why? 
       - react life cyclec has two phase : one is render phase thats inlcudes constructor and render method. second phase is commit phase which inlcudes updates the dom,  componentent did mount commit happnens. 
       - react batches the children render phase. so first completes the render mehtod. and then componnet did mount trigger.

### 9.10 


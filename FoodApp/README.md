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
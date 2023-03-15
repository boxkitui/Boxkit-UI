import React, { useEffect, useLayoutEffect, useState } from 'react';
import {Button} from 'boxkit/react'

const App = () => {
    return (
        <>
         <Button theme="ios" size="large" type="outlined" icon="" rightIcon="" disabled touchRipple="false" className="bg-midnight text-white">
            Enabled
        </Button>
        <Button theme="ios" size="large" type="outlined" icon="" rightIcon="" disabled touchRipple="false" className="bg-midnight text-white">
            Enabled
        </Button>
        <Button theme="ios" size="large" type="outlined" icon="" rightIcon="" disabled touchRipple="false" className="bg-bermuda text-white">
            Enabled
        </Button>
        </>
       
    )
}

export default App;
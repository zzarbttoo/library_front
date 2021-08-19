import { useReducer, useEffect, useCallback} from "react";

function reducer(state, action){
    switch(action.type){
        case 'LOADING':
            return {
                loading : true,
                data : null, 
                error : null
            };
        case 'SUCCESS':
            return {
                loading : false,
                data : action.data, 
                error : null
            }
        case 'ERROR':
            return{
                loading : false,
                data : null, 
                error : action.error   
            };
        case 'CLEAN_STATE' : {
            return {
                loading : false, 
                data: null,
                error: false
            }
        }
        default : 
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const useAsync = (callback, immediate = true) => {

    const [state, dispatch] = useReducer(reducer, {
        loading : false, 
        data: null,
        error: false
    });

    const execute = useCallback(async(...args) => {
        dispatch({type : 'LOADING'});

        
        try{

            const data = await callback(args);
            //console.log('data ::: ' + data);
            //setTimeout(() => dispatch({ type : 'SUCCESS', data}), 900);
            console.log('data ::: ' + data);

        }catch(error){
            //setTimeout(() => dispatch({type : 'ERROR', error}), 900);
            //console.log('error ::: ' + error);
            console.log('error ::: ' + error);
        }
    }, [callback]);

    useEffect(() => {
        if (immediate){
            execute();
        }
    }, [execute, immediate]);


    //console.log(state);
    //console.log(dispatch);
    //console.log("callOnMount ::: " + callOnMount);

    return [state, execute];


}


export default useAsync;
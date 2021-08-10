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
        default : 
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

function useAsync(callback, callOnMount){

    const [state, dispatch] = useReducer(reducer, {
        loading : false, 
        data: null,
        error: false
    });

    // const fetchData = async () => {
    //     dispatch({ type : 'LOADING'});
    //     try{
    //         const data = await callback();
    //         console.log('data logging ::: ' + data);
    //         dispatch({type : 'SUCCESS', data})

    //         return true
    //     }catch(e){
    //         dispatch({type : 'ERROR', error:e});
    //     }
    // }

    const run = useCallback(
        async (...args) => {
            dispatch({type : 'Loading'});

            //header 등을 지정해준다
            // const requestConfig = {
            // };

            try{
                const data = await callback(...args);
                setTimeout(() => dispatch({type : 'SUCCESS', data}), 900);

                return true

            }catch(error){
                setTimeout(() => dispatch({type :'ERROR', error}), 900);
            }
        },
        [callback],
    );



    // useEffect(() => {
    //     if (skip) return;
    //     fetchData();
    // }, deps);

    useEffect (() => {
        callOnMount && run();

        return () => {
            dispatch({type : 'CLEAN_STATE'});

        };

    }, [callOnMount, run]);


}


export default useAsync;
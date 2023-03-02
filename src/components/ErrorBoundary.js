import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            error: null, 
            errorInfo: null,
            hasError: false,
        };
    }

    static getDerivedStateFromError(error){
        return {
            hasError: true
        }
    }

    componentDidCatch(error, errorInfo){
        // eslint-disable-next-line no-undef
        // logErrorToMyService(error, errorInfo);
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
        // console.log("Logging into", error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ whiteSpace: 'pre-wrap', position: 'relative', top: '100px' }}>
                  <h2>Something went wrong.</h2>
                  <div style={{ whiteSpace: 'pre-wrap'}}>
                    {this.state.error && this.state.error.toString()}
                    {/* <div></div> */}
                    {/* {this.state} */}
                  </div>
                </div>
            );      // You can render any custom fallback UI      return <h1>Something went wrong.</h1>;    }
        }
        return this.props.children; 
    }
}
 
export default ErrorBoundary;
import {Component} from "react";

type Props = {};

type State = {
    count: number;
}

class ClassComponentWithState extends Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = { count: 0 };
    }

    increase = () => {
        this.setState({count: this.state.count + 1});
    }
    render() {
        return(
            <>
                <h1 className="text-center my-12">Count is <strong>{this.state.count}</strong></h1>
                <div className="text-center">
                    <button onClick= {this.increase} className="bg-cf-dark-gray text-white py-2 px-4">
                        Increase
                    </button>
                </div>

            </>
        )
    }
}

export default ClassComponentWithState;
import React from "react";
class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productPrice: Number(0),
    };
  }
  render() {
    return (
      <div>
        <form className="row" onSubmit={
          
          (e) => {
            e.preventDefault();
            this.props.add(this.state.productName,Number(this.state.productPrice));
          }
        } >
          <div className="mb-3 col-6">
            <label htmlFor="inputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              aria-describedby="name"
              name="p_name"
              onChange={(e) => {
                this.setState({ productName: e.currentTarget.value });
              }}
              value={this.state.productName}
            />
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="inputPrice" className="form-label">
              price
            </label>
            <input
              type="text"
              className="form-control"
              id="price"
              name="p_price"
              onChange={(e) => {
                this.setState({ productPrice: Number(e.currentTarget.value) });
              }}
              value={Number(this.state.productPrice)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary col-2"
          
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddItem;

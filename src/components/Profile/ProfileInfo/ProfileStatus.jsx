import React from "react";
import s from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status //https://youtu.be/1faxVHNBnsU?t=1724
  };

  activateEditMode = () => {
    this.setState({ //https://youtu.be/78ak5Jqmh9g?t=1649 //https://youtu.be/78ak5Jqmh9g?t=1669
      editMode: true,
    });
  }

  deactivateEditMode = () => { 
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status); //https://youtu.be/1faxVHNBnsU?t=1447
  }

  onStatusChange = (e) => {
    this.setState({
       status: e.currentTarget.value    //https://youtu.be/1faxVHNBnsU?t=1878
    });
  }
                   //https://youtu.be/1faxVHNBnsU?t=1791
  render() {
    return (
      <div className={s.status}>
            {!this.state.editMode && 
                    <div>
                        <span onDoubleClick={this.activateEditMode}>
                        {this.props.status || "-----"}
                        </span>
                    </div>
            }                                              
            {this.state.editMode && 
                    <div>
                        <input
                        autoFocus={true}
                        onBlur={this.deactivateEditMode}
                        value={this.state.status}
                        onChange={this.onStatusChange}
                        />
                    </div>
            }
      </div>
    );
  }
}

export default ProfileStatus;

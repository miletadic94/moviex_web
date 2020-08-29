import React, { useEffect } from "react";
import { connect } from "react-redux";
import { SET_ALERT } from "../../redux/actions/alert.actions";

const TIMEOUT = 3000;

const Alert = ({ alert, closeAlert }) => {
  useEffect(() => {
    setTimeout(closeAlert, TIMEOUT);
  }, [alert]);

  if (!alert) return null;
  const { type, message } = alert;
  return (
    <div className="row fixed-top mt-5 ">
      <div className="col-md-2 ml-auto">
        <div className={`alert alert-${type}`}>{message}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  alert: state.alert,
});

const mapDispatchToProps = (dispatch) => ({
  closeAlert: () => dispatch({ type: SET_ALERT, payload: null }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Alert);

import React from 'react';
import PropTypes from 'prop-types';
import './Job.css';

import calculateDateInFormat from '../../../../utils/calculateDate';
import Advertisement from './Advertisement';
import ToolTip from '../../../../components/ToolTip';

class Job extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDateHover: true,
    }
  }

  toggleDateHover = () => {
    this.setState(state => ({ showDateHover: !state.showDateHover }))
  }

  hideDateHover = () => {
    this.setState({ showDateHover: false });
  }

  showDateHover = () => {
    this.setState({ showDateHover: true });
  }

  render() {
    const {
      premiumPost, index, jobTitle, jobLocation, jobCreatedDate, removeJob,
    } = this.props;
    const { showDateHover } = this.state;
    const postingDate = calculateDateInFormat(jobCreatedDate);

    if ((index + 1) % 12) {
      return (
        <div onMouseEnter={this.hideDateHover} onMouseLeave={this.showDateHover} className="jobRow container table table-hover" data-jobid="653699">
          <div className="wd71 col-md-11 hh container pdl0 pull-left ml0">
            <div className="pull-left col-lg-3new pd0 hidden-sm">
              <span rel="tooltip" data-trigger="hover click" title="" className="pt4 pull-left mr6" data-original-title="company job"><i className="fa fa-suitcase darkgreyish" /></span>
              <span className={`pull-left mr6 pt4 '${premiumPost ? ' ' : 'grey_txt'}`}><i className="fa fa-bookmark" /></span>
              <span rel="tooltip" data-trigger="hover click" className="mr6 glyphicon glyphicon-plus-sign plsign plsigngrey pull-left" data-original-title="" title=""><i className=" fa fa-plus-circle" /></span>
              <span className="showcase-logo ml6 top4">
                <a href="https://showcase.iimjobs.com/rscp-amazon-125.html?ref=jobfeedlist">
                  <i className="fa fa-star-o" />
                  <ToolTip id="save_job" width="180px">save this job for future reference</ToolTip>
                </a>
              </span>
            </div>
            <div className="clearfix visible-xs" />
            <div className="pull-left col-md-9new col-sm-9new pdlr0 mtb2">
              <span className="pull-left">
                <a className="hidden-sm txt-color" name="view_link" data-jobid="653699" href="https://www.iimjobs.com/j/nextfive-product-manager-5-10-yrs-653699.html?ref=jf">
                  {jobTitle}
                </a>
                <div className="clearfix" />
                <span className="visible-xs" alt={jobLocation} title={jobLocation}>
                  <i className="glyphicon" />
                  {jobLocation}
                </span>
              </span>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-4 pdlr0 mtb2 col-new">
            <div className="col-lg-7 ellip  pdlr0 pdmobl5">
              <span alt="Bangalore" title="Bangalore">{jobLocation}</span>
            </div>
            <div className="col-lg-5 pdl6">
              {showDateHover
                ? <span className="grey_txt txt12 original">{postingDate}</span>
                : (
                  <div className="logo-linkage">
                    <span className="showcase-logo">
                      <a href="https://showcase.iimjobs.com/rscp-amazon-125.html?ref=jobfeedlist">
                        <i className="fa fa-binoculars" />
                        <ToolTip id="sneak_peak">Sneak peak inside office</ToolTip>
                      </a>
                    </span>
                  </div>
                )
              }
              <span className="showunfollow_options glyphicon glyphicon-remove grycol txt10 posrel">
                <button type="button" onClick={removeJob} className="cross-button">
                  <i className="fa fa-times" />
                </button>
              </span>
            </div>
          </div>
        </div>
      )
    }
    return (<Advertisement />)
  }
}

Job.propTypes = {
  premiumPost: PropTypes.number,
  index: PropTypes.number,
  jobTitle: PropTypes.string,
  jobLocation: PropTypes.string,
  jobCreatedDate: PropTypes.string,
  removeJob: PropTypes.func.isRequired,
};

export default Job;

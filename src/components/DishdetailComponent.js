import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

	constructor(props) {
        super(props);
	}

	renderDish(dish) {
		if(dish != null){
            return(
            	<Card>
            	    <CardImg width="100%" src={dish.image} alt={dish.name}/>
            	    <CardBody>
            	        <CardTitle>{dish.name}</CardTitle>
            	        <CardText>{dish.description}</CardText>
            	    </CardBody>
            	</Card>
            );
		}
		else{
			return (
				<div></div>
			);
		}
	}

	renderComment(dish) {
		if(dish != null) {
	        const cmt = dish.comments.map((comment) => {
				return (
	                <div key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>--{comment.author} , {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(comment.date))}</p>
	                </div>
				);
		    });
			return (
	            <div>
				    <h4>Comments</h4>
				    <ul className="list-unstyled">
				      {cmt}
				    </ul>
				</div>
			);
		}
		else{
			return (
				<div></div>
			);
		}

	}

	render() {
		return (
			<div className="row">
			    <div className="col-12 col-md-5 m-1">
			        {this.renderDish(this.props.dish)}
			    </div>
			    <div className="col-12 col-md-5 m-1">
			        {this.renderComment(this.props.dish)}
			    </div>
			</div>
		);
	}
}

export default DishDetail;

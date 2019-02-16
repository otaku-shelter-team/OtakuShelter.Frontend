import React from 'react'
import userImage from '../../assets/icons/user.svg'

function LoginTemplate({formData, formErrors, onChange, onSubmit}) {
	return (
		<section className="hero is-fullheight">
			<div className="hero-body">
				<div className="container has-text-centered">
					<div className="column is-4 is-offset-4">
						<div className="box">
							<figure className="avatar">
								<img alt="#" src={userImage} width={100} height={100}/>
							</figure>
							<form>
								<div className="field">
									<div className="control">
										<input name="username" className="input" type="login" placeholder="Your User Name" autoFocus=""
										       onChange={({target: {name, value}}) => onChange(name, value)}/>
									</div>
								</div>
								<div className="field">
									<div className="control">
										<input name="password" className="input" type="password" placeholder="Your Password"
										       onChange={({target: {name, value}}) => onChange(name, value)}/>
									</div>
								</div>
								{/*<div className="field">*/}
								{/*<label className="checkbox">*/}
								{/*<input type="checkbox"/>*/}
								{/*Remember me*/}
								{/*</label>*/}
								{/*</div>*/}
								<button onClick={onSubmit} type="button" className="button is-info is-fullwidth">Login</button>
							</form>
						</div>
						<p className="has-text-grey">
							<a href="../">Sign Up</a> &nbsp;·&nbsp;
							<a href="../">Forgot Password</a> &nbsp;·&nbsp;
							<a href="../">Need Help?</a>
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default LoginTemplate
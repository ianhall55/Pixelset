# Memrys

[Heroku link][heroku] **Note:** This will be link to production site

[heroku]: https://memrys.herokuapp.com/

This is a photo sharing site that is inspired by Pixieset

Built on a Ruby, Rails, Javascript, React, Redux, postgresql stack

Memrys allows you to create an account and share photo albums
  with your friends and family

![splash](./readme_photos/splash.png)




Memrys keeps your password data safe.
```ruby
def password=(password)
  @password = password
  self.password_digest = BCrypt::Password.create(password)
end

def is_password?(password)
  BCrypt::Password.new(self.password_digest).is_password?(password)
end

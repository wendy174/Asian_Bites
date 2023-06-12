FROM ruby:2.7.4-alpine
RUN apk add \
    build-base \
    postgresql-dev \
    tzdata \
    nodejs
ENV BUNDLER_VERSION=2.4.8
  
WORKDIR /app
COPY Gemfile* .
RUN gem update --system && \
    gem install bundler:$BUNDLER_VERSION && \
    bundle install
COPY . .
EXPOSE 3000
CMD ["rails", "server", "-b", "0.0.0.0"]

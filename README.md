# Node.js API Server With DDD Architecture

## Architecture

본 프로젝트는 Domain Driven Design에 따라 크게 3겹의 layer로 나누어지며, 그 구조는 다음과 같다.

![image-20181101154822414](/Users/namhoonlee/Desktop/git/node-ddd-boilerplate-ts/docs/images/image-20181101154822414.png)

외부 환경인 Database와 Browser 들과의 통신의 담당을 주로 하는 Infra와 e2e 기능에 해당하는 사용자 관점에서의 로직을 수행하는 API layer 그리고 각 도메인의 비즈니스 로직과 모델링이 정의된 Domain 레이어로 나뉘어 진다.

## Domain Layer

Domain 레이어는 각 서브 도메인 마다 model, service, repository를 가지며 다음과 같은 역할을 수행한다.

- Model
  해당 도메인의 모델링이 정의되고, 해당 도메인 내에서의 항상성과 유효성을 담당한다.
- Service
  주로 여러 도메인을 아우르는 로직을 처리한다.
- Repository
  도메인 단위로 DB 입출력을 담당하며, 실제 구현은 infra layer의 repository implementation에서 이루어 지며, interface만 정의되어 있다.

## API Layer

도메인의 서비스들을 조합하며 엔드 유저 레벨에서의 기능수행이 이루어 진다.

가령 특정 재화를 구매함에 따라 결제를 수행하는 어플리케이션이 있다면 본 api 레이어에는 '결제'와 같은 엔드 유저 레벨에서의 함수가 들어가며, 결제 데이터 생성, 구매자의 감소 등과 같은 로직은 도메인의 모델 및 서비스 레벨에서 처리된다.

## Infra layer

도메인의 비즈니스 로직들이 잘 수행될 수 있도록 DB, http 라우터 등 외부 환경을 다루는 실제 구현이 이루어 진다.

본 레이어에서 도메인의 repository interface에 정의된 함수들을 실제로 구현하며, express router를 활용하여 외부 요청에 대한 라우팅을 수행한다.

또한 본 레이어에는 middleware, auth guard, errorHandler 처럼 도메인에 접근하기 전에 전처리되거나 비즈니스 로직 이후 클라이언트에게 반환할 반환값에 대한 후처리 로직이 들어간다.

## Branching Model

모든 작업 내용은 feature/[브랜치 명] 에서 작업하고, dev 서버에 배포하기 위한 버전을 develop 브랜치에 푸시한다.

Release 브랜치에서 develop 브랜치를 pull 하면서 코드리뷰를 진행하고 모든 코드리뷰 사항이 반영되면 release 브랜치에 머지된다.

release 브랜치에서 스프린트 및 일정관리, 테스트 작업을 진행하며 안정화되면 master 브랜치로 push 하고 서비스 배포한다.

- Master: 실제 서비스 배포를 위한 브랜치
- Release: 개발 진행의 경과가 되는 브랜치로 QA 및 일정관리의 지표가 된다.
- Develop: 각 개발자들이 실시간으로 머지하는 브랜치로 테스트 서버의 소스코드가 보관된다.
- Feature: 각 개발자들이 임의로 자신들의 작업량을 작업한다.

## 데이터베이스

### mongo replica set

본 프로젝트 에서는 3개의 mongo server 로 구성된 mongo replica set을 사용하며, 그 목적은 몽고 디비 4.0 부터 지원하는 트랜잭션을 사용함에 있다.

### 트랜잭션의 처리

`./src/server/utils/transactionExecuter` 의 retry 기능을 사용하여 트랜잭션이 실패하면 리트라이 함을 원칙으로 한다.

## input validation

본 프로젝트에서는 클라이언트의 요청값을 검증함에 있어 모든 요청의 형태를 DTO 형태로 정의하고 해당 DTO 에 값을 넣기 전에 `Joi` 라이브러리를 사용하여 요청값에 대한 검증을 수행한다.

## Webpack Configuration

## tsconfig setting

각 파일에서 다른 파일을 import 함에 있어서 보다 가독성을 높이기 위해 @domain과 같이 태그를 하여 손쉽게 import를 할 수 있습니다.

tsconfig.json 파일의 예

```json
{
  "compilerOptions": {
    "paths": {
      "@domain/*": ["server/domain/*"]
    }
  }
}
```

위처럼 옵션을 설정하면 복잡한 filepath 대신 위의 태그네임을 통해 import 할 수 있습니다.

이때 위의 태그네임이 잘 반영이 되지 않는 경우가 있는데, 이는 웹팩에서 트랜스파일링을 하는 과정에서 webpack.config.js 세팅을 바꾸어 줌으로써 해결이 가능합니다.

태그 네이밍을 하기 위해서 tsconfig-paths-webpack-plugin 을 사용하는데 해당 플러그인은 다음과 같이

루트 plugin이 아닌 resolve 내의 plugin 내에 설정되어야 합니다.

webpack.config.js의 예

```js
{
  resolve: {
    plugins: [
      new TsconfigPathsPlugin({
        configFile: './tsconfig.json' // setup tsconfig path
      })
    ];
  }
}
```

## Author

[frontalnh(Namhoon Lee)](https://github.com/frontalnh)

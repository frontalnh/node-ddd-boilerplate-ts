# Email Template

## MJML
  이메일 HTML 코드 생성 프레임워크

  - 이메일에서 사용가능한 코드(HTML, CSS)를 쉽게 만들어 주는 기능
  - 자체 editor를 제공해서 쉽게 생성, 변경이 가능함

### Reference
  - homepage : https://mjml.io/
  - document : https://mjml.io/documentation/
  - template samples: https://mjml.io/templates
  - editor Download: http://mjmlio.github.io/mjml-app/


## Gitple Mail Templates

| File                  |      Description      |
|-----------------------|:----------------------|
| header.mjml           | 공통 header            |
| footer.mjml           | 공통 footer            |
| welcome.mjml          | 회원가입 템플릿           |
| verify.mjml           | 메일 인증코드 템플릿        |
| reset_password.mjml   | 비밀번호 리셋 탬플릿       |

## Test
  : 이메일 테스트트 할 경우 소스 코드에 주석 처리된 메일 발송 부분을 수정해서 테스트 진행

```javascript
  let emailData = {
    from: '"BWN" <noreply@bluewhale.foundatio>',
    to: 'test@bluewhale.foundation',             // 테스트할 메일 주소로 변경
    subject: '테스트 메일 : ' + template.path,
    message: template.html
  };

  // Send Email
  sesClient.sendEmail(emailData, (err, data) => {
    if (err) {
      console.error('sendMail failure', err);
    }
    console.info('sendMail success:', emailData.to, emailData.subject);
  });
```

```bash
  $ node ./demo.js
```

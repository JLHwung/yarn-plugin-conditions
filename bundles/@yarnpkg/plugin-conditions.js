/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@yarnpkg/plugin-conditions",
factory: function (require) {
var plugin=(()=>{var ce=Object.create,b=Object.defineProperty,le=Object.defineProperties,pe=Object.getOwnPropertyDescriptor,de=Object.getOwnPropertyDescriptors,ue=Object.getOwnPropertyNames,A=Object.getOwnPropertySymbols,fe=Object.getPrototypeOf,J=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;var M=(t,e,n)=>e in t?b(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,C=(t,e)=>{for(var n in e||(e={}))J.call(e,n)&&M(t,n,e[n]);if(A)for(var n of A(e))me.call(e,n)&&M(t,n,e[n]);return t},Y=(t,e)=>le(t,de(e)),ge=t=>b(t,"__esModule",{value:!0});var m=t=>{if(typeof require!="undefined")return require(t);throw new Error('Dynamic require of "'+t+'" is not supported')};var he=(t,e)=>{for(var n in e)b(t,n,{get:e[n],enumerable:!0})},ye=(t,e,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of ue(e))!J.call(t,o)&&o!=="default"&&b(t,o,{get:()=>e[o],enumerable:!(n=pe(e,o))||n.enumerable});return t},g=t=>ye(ge(b(t!=null?ce(fe(t)):{},"default",t&&t.__esModule&&"default"in t?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t);var je={};he(je,{default:()=>ve});var X=g(m("@yarnpkg/core"));var v=g(m("@yarnpkg/core"));function B(t){var y,S;let e="condition:";if(!t.startsWith(e,0))throw new Error(`Expected 'condition:' at index 0 (${t})`);let n=e.length;c();let o=p(/[\w-]+/y);if(!o)throw new Error(`Expected an identifier at index ${n} (${t})`);c(),l("?"),c();let r=null;t[n]==="("?r=d().trim()||null:t[n]!==":"&&(r=((y=p(/[^(:]+/y))==null?void 0:y.trimRight())||null),l(":"),c();let i=null;n<t.length&&(t[n]==="("&&!t.startsWith("esm:",n+1)?i=d().trim()||null:t[n]!==":"&&(i=((S=p(/[^(#]+/y))==null?void 0:S.trimRight())||null));let s=h(),a=null;if(n<t.length&&t[n]==="#"&&(n++,a=p(/\w+/y),c()),n!==t.length)throw new Error(`Unexpected '${t[n]}' at index ${n} (${t})`);return{test:o,consequent:r,alternate:i,esmExports:s,hash:a};function l(u){if(t[n]!==u)throw new Error(`Expected '${u}' at index ${n} (${t})`);n++}function c(){p(/\s*/y)}function p(u){u.lastIndex=n;let f=u.exec(t);return f?(n+=f[0].length,f[0]):null}function d(){l("(");let u=1,f="";for(;u;){if(n===t.length)throw new Error(`Expected ')' at index ${n} (${t})`);let k=t[n];k==="("&&u++,k===")"&&u--,(k!==")"||u>0)&&(f+=k),n++}return c(),f}function h(){if(n<t.length&&t.startsWith("(esm:",n)){let u=d().slice("esm:".length).trim();if(u)return u.split(",").map(f=>f.trim())}return null}}var F=["dependencies","devDependencies","peerDependencies"],Q=7;function x(t){return t.startsWith("condition:")}function K(t){try{return B(t)}catch(e){try{let{test:n,consequent:o,alternate:r,esmExports:i}=v.structUtils.parseRange(t).params;return{test:n,consequent:o||null,alternate:r||null,esmExports:i||null}}catch{throw e}}}function j(t){return K(t.range)}function q(t){return K(t.reference)}function ke({test:t,consequent:e,alternate:n,esmExports:o,hash:r}){let i=`condition:${t}?`;return e&&(i+=e),i+=":",n&&(i+=n),o&&(i+=`(esm:${o.join(",")})`),r&&(i+=`#${r}`),i}function G(t,{test:e,consequent:n,alternate:o,esmExports:r,hash:i}){return v.structUtils.makeLocator(t,ke({test:e,consequent:n,alternate:o,esmExports:r,hash:i}))}function w(t,e,n,o,r){let i=v.structUtils.makeIdent(e.scope,`${e.name}-${n}-${r}`),s=t.configuration.get("defaultProtocol")+`${v.structUtils.stringifyIdent(e)}@${o}`;return v.structUtils.makeDescriptor(i,s)}function O(t,e,n,o,r){return v.hashUtils.makeHash(String(Q),t,e||"-",n||"-",(o==null?void 0:o.join(","))||"-",r?"1":"0").slice(0,6)}var L=g(m("@yarnpkg/core")),Z={conditions:{description:"",type:L.SettingsType.MAP,valueDefinition:{description:"",type:L.SettingsType.SHAPE,properties:{source:{description:"",type:L.SettingsType.STRING,default:"env"},default:{description:"",type:L.SettingsType.BOOLEAN,default:!1}}}}};function T(t,e){if(!t.configuration.get("conditions").has(e))throw new Error(`Unknown condition: ${e}. You must add it to your .yarnrc.yml file.`)}function R(t,e){return T(t,e),t.configuration.get("conditions").get(e).get("default")}function H(t,e){var i;T(t,e);let n=t.configuration.get("conditions").get(e),o=n.get("source"),r=n.get("default");if(o!=="env")throw new Error("The only supported configuration source is 'env'");return(i=Pe(process.env[e]))!=null?i:r}function Pe(t){return t&&t!=="false"&&t!=="0"}var W=class{supportsDescriptor(e){return x(e.range)}supportsLocator(e){return x(e.reference)}shouldPersistResolution(){return!1}bindDescriptor(e){return e}getResolutionDependencies(e,n){let{test:o,consequent:r,alternate:i,esmExports:s}=j(e);return[r&&w(n.project,e,o,r,!0),i&&w(n.project,e,o,i,!1)].filter(Boolean)}async getCandidates(e,n,o){let{test:r,consequent:i,alternate:s,esmExports:a}=j(e),l=O(r,i,s,a,R(o.project,r));return[G(e,{test:r,consequent:i,alternate:s,esmExports:a,hash:l})]}async getSatisfying(){return null}async resolve(e,n){let{test:o,consequent:r,alternate:i,esmExports:s}=q(e),a=O(o,r,i,s,R(n.project,o)),l=r&&w(n.project,e,o,r,!0),c=i&&w(n.project,e,o,i,!1);return Y(C({},e),{version:`0.0.0-condition-${a}`,languageName:n.project.configuration.get("defaultLanguageName"),linkType:X.LinkType.HARD,dependencies:new Map([r&&[l.identHash,l],i&&[c.identHash,c]].filter(Boolean)),peerDependencies:new Map,dependenciesMeta:new Map,peerDependenciesMeta:new Map,bin:null})}};var I=g(m("@yarnpkg/core"));var ee=g(m("@yarnpkg/core")),D=g(m("@yarnpkg/fslib")),te=g(m("@yarnpkg/libzip")),ne=15805116e5;async function oe(t,e,n,o,r){let[i,s]=await Promise.all([D.xfs.mktempPromise(),(0,te.getLibzipPromise)()]),a=D.ppath.join(i,"condition.zip"),l=ee.structUtils.getIdentVendorPath(t),c=new D.ZipFS(a,{libzip:s,create:!0,level:e.configuration.get("compressionLevel")});return await c.mkdirpPromise(l),await Promise.all([c.writeJsonPromise(D.ppath.join(l,"package.json"),n),c.writeFilePromise(D.ppath.join(l,"index.js"),o),r&&c.writeFilePromise(D.ppath.join(l,"index.mjs"),r)]),await Promise.all(c.getAllFiles().map(p=>c.utimesPromise(p,ne,ne))),c}var V=class{supports(e){return x(e.reference)}getLocalPath(){return null}async fetch(e,n){let o=n.checksums.get(e.locatorHash)||null,[r,i,s]=await n.cache.fetchPackageFromCache(e,o,{onHit:()=>n.report.reportCacheHit(e),onMiss:()=>n.report.reportCacheMiss(e,`${I.structUtils.prettyLocator(n.project.configuration,e)} can't be found in the cache and will be fetched from the disk`),loader:()=>this.generateConditionPackage(e,n),skipIntegrityCheck:n.skipIntegrityCheck});return{packageFs:r,releaseFs:i,prefixPath:I.structUtils.getIdentVendorPath(e),localPath:this.getLocalPath(),checksum:s}}async generateConditionPackage(e,n){let{test:o,consequent:r,alternate:i,esmExports:s}=q(e),a=R(n.project,o),l=O(o,r,i,s,a),c=(f,k)=>{if(f==null)return{dependency:null,require:"null",esmHeader:"",imported:"{ __proto__: null }"};let $=w(n.project,e,o,f,k),N=I.structUtils.stringifyIdent($),z=`if_${k}`;return{dependency:{[N]:$.range},require:`require(${JSON.stringify(N)})`,esmHeader:`import * as ${z} from ${JSON.stringify(N)};`,imported:z}},p=c(r,!0),d=c(i,!1),h=C({version:`0.0.0-condition-${l}`,dependencies:C(C({},p.dependency),d.dependency)},s&&{exports:{module:"./index.mjs",default:"./index.cjs"}}),y=`// env vars from the cli are always strings, so !!ENV_VAR returns true for "false"
function bool(value) {
  if (value == null) return ${a};
  return value && value !== "false" && value !== "0";
}
`,S=`${y}
module.exports = bool(process.env[${JSON.stringify(o)}])
  ? ${p.require}
  : ${d.require};
`,u=null;if(s){let f=!1,k=[];for(let $ of s)$==="default"?f=!0:k.push($);u=`${y}
${p.esmHeader}
${d.esmHeader}

export const { ${k.join(", ")} } = bool(process.env[${JSON.stringify(o)}]) ? ${p.imported} : ${d.imported};
${f&&`export default (bool(process.env[${JSON.stringify(o)}]) ? ${p.imported} : ${d.imported}).default;`}
`}return oe(e,n.project,h,S,u)}};var _=g(m("@yarnpkg/core"));var xe=Function.call.bind(Object.prototype.hasOwnProperty);async function ie(t,e){var r;let{project:n}=t,o=!1;for(let i of F){let s=t.manifest.getForScope(i).values();for(let a of s){if(!x(a.range))continue;let{test:l,consequent:c,alternate:p}=j(a),d=H(n,l)?c:p,h=_.structUtils.stringifyIdent(a),y=i==="dependencies"&&!e.dependencies[h]&&((r=e.optionalDependencies)==null?void 0:r[h])?"optionalDependencies":i;d?(e[y][h]=d,t.manifest.raw[y][h]=d,t.manifest[i].set(a.identHash,_.structUtils.makeDescriptor(a,d))):(delete e[y][h],delete t.manifest.raw[y][h],t.manifest[i].delete(a.identHash)),o=!0}}if(xe(e,"conditions")){o=!0;let i=e.conditions;for(let[s,[a,l]]of Object.entries(i)){let c=H(n,s)?a:l;if(c)for(let[p,d]of Object.entries(c))d===null?delete e[p]:e[p]=d}delete e.conditions}o&&await t.project.configuration.triggerHook(i=>i.beforeWorkspacePacking,t,e)}var P=g(m("@yarnpkg/core")),re=g(m("@yarnpkg/cli")),E=g(m("clipanion")),se=g(m("typanion"));var De=Function.call.bind(Object.prototype.hasOwnProperty),ae=(t,e,...n)=>De(t,e)&&(n.length===0||ae(t[e],...n)),U=class extends re.BaseCommand{constructor(){super(...arguments);this.condition=E.Option.String({required:!0});this.true=E.Option.Boolean("--true",!1);this.false=E.Option.Boolean("--false",!1)}async execute(){let{project:e,workspace:n,cache:o,configuration:r}=await this.getRoot();T(e,this.condition);let i=this.false?!1:this.true?!0:H(e,this.condition);for(let a of this.nestedWorkspaces(n,e))this.materializeCondition(i,a);let s=await P.StreamReport.start({configuration:r,stdout:this.context.stdout,includeLogs:!0},async a=>{await e.resolveEverything({cache:o,report:a})});if(s.hasErrors())return s.exitCode();await e.persist()}*nestedWorkspaces(e,n){yield e;for(let o of e.workspacesCwds){let r=n.workspacesByCwd.get(o);r&&(yield*this.nestedWorkspaces(r,n))}}materializeCondition(e,n){for(let r of F){let i=n.manifest.getForScope(r).values();for(let s of i){if(!x(s.range))continue;let{test:a,consequent:l,alternate:c}=j(s);if(a!==this.condition)continue;let p=e?l:c;p?n.manifest[r].set(s.identHash,P.structUtils.makeDescriptor(s,p)):n.manifest[r].delete(s.identHash)}}let o=n.manifest.raw;if(ae(o,"conditions",this.condition)){let[r,i]=o.conditions[this.condition],s=e?r:i;if(s)for(let[a,l]of Object.entries(s))l===null?delete o[a]:o[a]=l;Object.keys(o.conditions).length===1?delete o.conditions:delete o.conditions[this.condition]}}async getRoot(){let e=await P.Configuration.find(this.context.cwd,this.context.plugins),[{project:n,workspace:o},r]=await Promise.all([P.Project.find(e,this.context.cwd),P.Cache.find(e,{immutable:!0})]);return{configuration:e,project:n,workspace:o,cache:r}}};U.paths=[["condition","materialize"]],U.usage=E.Command.Usage({description:"Evaluate and replace a condition in package.json files",details:"\n      This command will replace all the occurrences of `<condition>` in the current workspace and in nested workspaces.\n\n      The value of the condition (`true` or `false`) is based on the following sources, in descending priority order:\n\n      - the `--true` or `--false` option;\n      - the `<condition>` environment variable;\n      - the default value specified in the Yarn configuration;\n      - `false` by default.\n    "}),U.schema=[se.hasMutuallyExclusiveKeys(["true","false"])];var ve={configuration:Z,commands:[U],fetchers:[V],resolvers:[W],hooks:{beforeWorkspacePacking:ie}};return je;})();
return plugin;
}
};

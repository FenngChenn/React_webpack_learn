import React, {Component} from 'react';

class BlogSection extends Component {
  render() {
    return(
      <div>
      <div>
        <h2>React</h2>
        <div>
          React是React类库的入口。如果你正在使用预编译包的其中一个，那么React可能是一个全局变量；如果你使用的是CommonJS模块，
          可以用require()引入React。
        </div>
      </div>
      <div>
        <h3>React.Component</h3>
        <div>当你定义使用ES6语法时，这个是React组件类的基础类。</div>
      </div>
      <div>
        <h3>React.createClass</h3>
        <span>createClass(必须有render方法)</span>
        <div>
          创建一个组件类，给一个定义。一个组件包括一个返回一个单一子结构的render方法，这个子结构也许还有一个任意深度的子结构。
          使得组件不同于标准原型类的一点就是你不需要用new去定义它们，实例化。它们是很简洁的封装，可以为你在后台创建实例。
        </div>
      </div>
      <div>
        <h3>React.createElement</h3>
        <span>ReactElement(string/ReactClass type自己定义的类名也行，props 属性，children 子结构)</span>
        <div>
          创建并且返回一个新的给定类型的ReactElement，type参数可以是一个html标签名称字符串也可以是一个ReactClass(可以创建于React.createClass)。
        </div>
      </div>
      <div>
        <h3>React.cloneElement</h3>
        <div>
          克隆并且返回一个新的、用element作为开始的ReactElement，复制完的元素会继承原有元素的属性还具有它自己新的属性，新的子结构
          会代替原有的子结构，就是说原来的子元素也会被覆盖。不像React.addons.cloneWithProps，key和ref也会从原来的元素中被保留复
          制下来，在结合这些属性的时候没有特殊的情况(不像cloneWithProps)。
        </div>
      </div>
      <div>
        <h3>React.createFactory</h3>
        <div>返回一个能生成给定类型的ReactElement的方法，像React.createElement，参数类型可以是html标签字符串类型，例如div、span等等，也可以是一个ReactClass。</div>
      </div>
      <div>
        <h3>React.isValidElement</h3>
        <div>检查这个元素是不是ReactElement</div>
      </div>
      <div>
        <h3>React.DOM</h3>
        <div>React.DOM提供了很简洁的封装对于DOM组件，仅仅当不使用JSX语法的时候才使用这个方法，比如React.DOM.div(null, ”Hello world!”)</div>
      </div>
      <div>
        <h3>React.PropTypes</h3>
        <div>React.ProTypes提供很多验证器来验证传入数据的有效性</div>
      </div>
      <div>
        <h3>React.Children</h3>
        <span>React.Children提供多种方法来处理this.props.children的模糊数据结构。</span>
        <h4>React.Children.map</h4>
        <span>array React.Children.map(object children, function fn [, object thisArg]) 返回值为array</span>
        <div>在每一个包含于children参数中的直属子集上执行调用fn函数，this被指向为上下文。如果children是一个关键的对象或数组，那么它将会被遍历：fn将不会被传入进去包含的对象。如果children是null或者undefined那么返回的也是null或者undefined，而不是一个数组。</div>
        <h4>React.Children.forEach</h4>
        <span>React.Children.forEach(object children, function fn [, object thisArg])</span>
        <div>和React.Children.map类似但是不返回一个数组</div>
        <h4>React.Children.count</h4>
        <span>Number React.Children.count(Object children)</span>
        <div>返回children的组件总数，和传递给map或者forEach的回调函数的调用次数相同</div>
        <h4>React.Children.only</h4>
        <span>object React.Children.only(Object children)</span>
        <div>返回children中仅有的子结构，否则抛出异常</div>
      </div>
      </div>
    );
  }
}

module.exports = {
  BlogSection
}
